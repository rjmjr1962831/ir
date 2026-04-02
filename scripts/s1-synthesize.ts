/**
 * s1 -- Master Synthesis for IR. Uses Claude Sonnet 4.6 to intelligently
 * synthesize all takeaways into a compact, deduplicated Section 12.
 *
 * Usage: npm run s1          (incremental -- only new takeaways)
 *        npm run s1 -- --force (full re-synthesis from all takeaways)
 *
 * 1. Reads all *TAKEAWAYS*.md in docs/takeaways/
 * 2. Reads current Section 12 (if any) as context
 * 3. Sends everything to Claude Sonnet 4.6 for intelligent synthesis
 * 4. Replaces Section 12 with the LLM output
 * 5. Updates "Last consolidated" date
 * 6. Commits locally (does NOT push -- Robert batches pushes with pts)
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { resolve } from 'path';

// Load .env manually (no dotenv dependency)
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^([A-Z_]+)=(.+)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

const TAKEAWAYS_DIR = resolve(process.cwd(), 'docs/takeaways');
const COMPREHENSIVE_PATH = resolve(process.cwd(), 'docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md');
const TAKEAWAYS_GLOB = /^[A-Z_]+_TAKEAWAYS_\d{4}-\d{2}-\d{2}(_\d{4})?\.md$/;

function getTakeawaysFiles(sinceDate: string | null): string[] {
  if (!existsSync(TAKEAWAYS_DIR)) return [];
  const all = readdirSync(TAKEAWAYS_DIR)
    .filter((f) => TAKEAWAYS_GLOB.test(f))
    .sort();
  if (!sinceDate) return all;
  return all.filter((f) => {
    const m = f.match(/(\d{4}-\d{2}-\d{2})/);
    return m ? m[1] > sinceDate : false;
  });
}

function readAllTakeaways(files: string[]): string {
  const chunks: string[] = [];
  for (const f of files) {
    const content = readFileSync(resolve(TAKEAWAYS_DIR, f), 'utf-8');
    chunks.push(`--- FILE: ${f} ---\n${content.trim()}`);
  }
  return chunks.join('\n\n');
}

function getLastSynthesizedDate(): string | null {
  if (!existsSync(COMPREHENSIVE_PATH)) return null;
  const doc = readFileSync(COMPREHENSIVE_PATH, 'utf-8');
  const match = doc.match(/\*Last synthesized: (\d{4}-\d{2}-\d{2})/);
  return match?.[1] ?? null;
}

function splitComprehensive(doc: string): { sections1to11: string; section12: string } {
  const marker = /\n---\s*\n+## 12\. Recent Updates/;
  const match = doc.search(marker);
  if (match === -1) {
    return { sections1to11: doc, section12: '' };
  }
  return {
    sections1to11: doc.slice(0, match),
    section12: doc.slice(match).replace(/^\n---\s*\n+/, ''),
  };
}

async function synthesizeWithLLM(takeawaysText: string, currentSection12: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set in .env');

  const today = new Date().toISOString().slice(0, 10);

  const isIncremental = currentSection12.length > 0;

  const systemPrompt = isIncremental
    ? `You are a technical editor merging NEW session takeaways into an existing synthesized knowledge section for the Instant Recall (IR) project -- a B2B food recall preparedness platform.

Rules:
- You will receive the EXISTING Section 12 and NEW takeaways only
- CRITICAL: Group by TOPIC, not by session or date. Use ### headers for topic groups (e.g., "### GEO & AI Discoverability", "### Site & SEO", "### Research & White Papers", "### Infrastructure")
- If the existing section is organized by date (e.g., "### CLAUDE -- 2026-03-22"), you MUST reorganize it by topic
- Merge new information into the appropriate topic groups
- Add new topic groups only if new info doesn't fit existing ones
- If new info supersedes something in the existing section, REPLACE the old info
- Remove redundancy -- don't add what's already covered
- Drop ephemeral session details (file lists, "what we did today" narratives)
- Keep ONLY: decisions made, things deployed/live, things deprecated/removed, current state, standing rules, config changes, new edge functions/scripts
- Use -- instead of em dashes
- Keep dates only where they matter (e.g., campaign start date, not "today we did X")
- Target 150-300 lines total. Compress aggressively.
- Output the complete updated Section 12
- Start with exactly: ## 12. Recent Updates (from t1)\\n\\n*Last synthesized: ${today}*\\n\\n---`
    : `You are a technical editor synthesizing software project session logs into a compact knowledge document section for the Instant Recall (IR) project -- a B2B food recall preparedness platform.

Rules:
- Group by TOPIC, not by session or date
- Remove all redundancy -- if the same fact appears in multiple sessions, keep one instance
- Drop anything superseded (e.g., "plan to do X" when a later session says X was done)
- Drop ephemeral session details (file lists, "what we did today" narratives)
- Keep ONLY: decisions made, things deployed/live, things deprecated/removed, current state, standing rules, config changes, new edge functions/scripts
- Use ### headers for topic groups (e.g., "### GEO & AI Discoverability", "### Site & SEO", "### Research & White Papers", "### Infrastructure")
- Use bullet points (- ) under each header
- Keep dates only where they matter
- Use -- instead of em dashes
- Target 150-250 lines total
- Start with exactly: ## 12. Recent Updates (from t1)\\n\\n*Last synthesized: ${today}*\\n\\n---`;

  const userPrompt = isIncremental
    ? `Here is the EXISTING Section 12:\n\n${currentSection12}\n\nHere are the NEW session takeaways to merge in:\n\n${takeawaysText}\n\nProduce the updated Section 12. Output ONLY the markdown content, starting with the ## 12 header.`
    : `Here are all the raw session takeaways to synthesize:\n\n${takeawaysText}\n\nProduce the synthesized Section 12. Output ONLY the markdown content, starting with the ## 12 header.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 8192,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${errorBody}`);
  }

  const data = await response.json() as {
    content: Array<{ type: string; text: string }>;
    usage?: { input_tokens: number; output_tokens: number };
  };
  const content = data.content?.[0]?.text;
  if (!content) throw new Error('Anthropic returned empty response');

  const usage = data.usage;
  if (usage) {
    console.log(`s1: Sonnet 4.6 usage -- ${usage.input_tokens} input + ${usage.output_tokens} output tokens`);
  }

  // Ensure it starts with the right header
  let result = content.trim();
  if (!result.startsWith('## 12.')) {
    result = `## 12. Recent Updates (from t1)\n\n*Last synthesized: ${today}*\n\n---\n\n${result}`;
  }

  return result;
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const force = process.argv.includes('--force');

  // 1. Read current doc and split
  let doc = readFileSync(COMPREHENSIVE_PATH, 'utf-8');
  const { sections1to11, section12 } = splitComprehensive(doc);

  // 2. Find takeaways (all if --force, otherwise only new ones)
  const lastSynth = getLastSynthesizedDate();
  const files = force ? getTakeawaysFiles(null) : getTakeawaysFiles(lastSynth);

  let synthesized: string;
  if (!force && files.length === 0 && section12) {
    console.log(`s1: No new takeaways since ${lastSynth}. Only updating date.`);
    synthesized = section12;
  } else if (files.length === 0) {
    console.log('No t1 takeaways files found in docs/takeaways/. Run "t1" on each AI first.');
    process.exit(0);
    return;
  } else {
    console.log(`s1: ${files.length} new takeaways since ${lastSynth ?? 'never'}. Synthesizing...`);
    const takeawaysText = readAllTakeaways(files);
    synthesized = await synthesizeWithLLM(takeawaysText, section12);
  }
  const lineCount = synthesized.split('\n').length;
  console.log(`s1: Synthesized Section 12: ${lineCount} lines.`);

  // 3. Reassemble document
  doc = sections1to11.trimEnd() + '\n\n---\n\n' + synthesized.trim() + '\n';

  // 4. Update metadata
  doc = doc.replace(
    /\*\*Last consolidated:\*\* .+/,
    `**Last consolidated:** ${today}`
  );

  // 5. Write
  writeFileSync(COMPREHENSIVE_PATH, doc, 'utf-8');
  console.log('s1: Updated COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md');

  // 6. Commit (do NOT push -- Robert uses pts/ptm)
  execSync('git add docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md', { stdio: 'inherit' });
  const status = execSync('git diff --cached --name-only', { encoding: 'utf-8' }).trim();
  if (status.length === 0) {
    console.log('No changes to commit; COMPREHENSIVE already up to date.');
  } else {
    execSync('git commit -m "s1: synthesize Section 12 via Sonnet 4.6"', { stdio: 'inherit' });
    console.log('s1: committed locally. Use pts to push.');
  }
}

main();
