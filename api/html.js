export const config = { runtime: "edge" };

export default async function handler(req) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const url = new URL(req.url);
  // Vercel rewrites lose the original path; recover from x-matched-path or query param
  const path = req.headers.get("x-matched-path") || url.searchParams.get("path") || url.pathname;

  // Forward token query param for protected pages (dashboard, crawl-stats)
  const token = url.searchParams.get("token") || "";
  const fnUrl = `${SUPABASE_URL}/functions/v1/serve-html`;
  const res = await fetch(fnUrl, {
    headers: {
      "x-forwarded-path": path,
      "x-forwarded-user-agent": req.headers.get("user-agent") || "",
      "x-forwarded-token": token,
    },
  });
  const html = await res.text();
  const upstreamCC = res.headers.get("cache-control") || "";
  const cacheControl = upstreamCC.includes("private") || res.status !== 200
    ? "private, no-store"
    : "public, max-age=60, s-maxage=86400, stale-while-revalidate=3600";
  const headers = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": cacheControl,
  };
  return new Response(html, { status: res.status, headers });
}
