/**
 * Freshness data cache.
 * Fetches from site_freshness table and caches for 5 minutes
 * to avoid hitting the DB on every request.
 */

const SUPABASE_URL =
  Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

export interface FreshnessData {
  lastContentUpdate: string;   // ISO timestamp
  lastAiSurfaceUpdate: string; // ISO timestamp
  pageCount: number;
  researchCount: number;
  latestFdaRecallDate: string | null;
  latestFdaRecallTitle: string | null;
  updatedAt: string;           // ISO timestamp
}

const FALLBACK: FreshnessData = {
  lastContentUpdate: new Date().toISOString(),
  lastAiSurfaceUpdate: new Date().toISOString(),
  pageCount: 16,
  researchCount: 3,
  latestFdaRecallDate: null,
  latestFdaRecallTitle: null,
  updatedAt: new Date().toISOString(),
};

let cached: FreshnessData | null = null;
let cachedAt = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export async function getFreshness(): Promise<FreshnessData> {
  const now = Date.now();
  if (cached && now - cachedAt < CACHE_TTL_MS) return cached;

  try {
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/site_freshness?id=eq.1&select=*`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const rows = await resp.json();
    if (!rows.length) throw new Error("No freshness row");

    const row = rows[0];
    cached = {
      lastContentUpdate: row.last_content_update,
      lastAiSurfaceUpdate: row.last_ai_surface_update,
      pageCount: row.page_count,
      researchCount: row.research_count,
      latestFdaRecallDate: row.latest_fda_recall_date || null,
      latestFdaRecallTitle: row.latest_fda_recall_title || null,
      updatedAt: row.updated_at,
    };
    cachedAt = now;
    return cached;
  } catch {
    // Return fallback if DB is unreachable
    return FALLBACK;
  }
}

/** Format ISO date as human-readable, e.g. "March 31, 2026" */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Global freshness store.
 * Set once per request cycle by serve-html/index.ts before rendering;
 * read by layout.ts renderPage() so individual pages do not need changes.
 */
let _current: FreshnessData | null = null;

export function setCurrentFreshness(data: FreshnessData): void {
  _current = data;
}

export function getCurrentFreshness(): FreshnessData | null {
  return _current;
}
