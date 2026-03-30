export const config = { runtime: "edge" };

export default async function handler(req) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const url = new URL(req.url);
  const path = url.pathname;

  const fnUrl = `${SUPABASE_URL}/functions/v1/serve-html`;
  const res = await fetch(fnUrl, {
    headers: {
      "x-forwarded-path": path,
      "x-forwarded-user-agent": req.headers.get("user-agent") || "",
    },
  });
  const html = await res.text();
  const upstreamCC = res.headers.get("cache-control");
  const headers = { "Content-Type": "text/html; charset=utf-8" };
  if (upstreamCC) headers["Cache-Control"] = upstreamCC;
  return new Response(html, { status: res.status, headers });
}
