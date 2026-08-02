import Link from "next/link";

/**
 * not-found.tsx — 404 page matching the Oxie light theme.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fb] px-6 text-center gap-6 select-none">
      <span className="text-5xl" aria-hidden="true">🔭</span>
      <div className="flex flex-col gap-2 max-w-sm">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Page not found</h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          This page doesn&apos;t exist. Head back to the chat and keep exploring.
        </p>
      </div>
      <Link
        href="/chat"
        id="not-found-home-link"
        className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors no-underline border border-black/15"
      >
        ← Back to Oxie
      </Link>
    </div>
  );
}
