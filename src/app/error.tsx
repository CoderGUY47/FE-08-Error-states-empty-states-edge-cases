"use client";

import { useEffect } from "react";

/**
 * error.tsx — Route-level error boundary for the /chat segment.
 * Catches runtime errors thrown inside the route (not global crashes).
 * Uses unstable_retry (Next.js 16 API) — NOT reset().
 */
export default function ChatError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("[Route Error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fb] px-6 text-center gap-6">
      <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-2xl select-none">
        ⚠️
      </div>
      <div className="flex flex-col gap-2 max-w-sm">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {error?.message?.includes("network") || error?.message?.includes("fetch")
            ? "A network error occurred. Check your connection and try again."
            : "An unexpected error occurred while loading the chat."}
        </p>
        {error?.digest && (
          <p className="text-[11px] text-slate-400 font-mono mt-1">
            Error ID: {error.digest}
          </p>
        )}
      </div>
      <button
        onClick={retry}
        className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors cursor-pointer border border-black/15"
      >
        Try again
      </button>
    </div>
  );
}

export const unstable_retry = true;
