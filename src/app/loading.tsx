/**
 * loading.tsx — Route-level skeleton shown during navigation to /chat.
 * Matches the coder-ai chat layout: sidebar + message area + input.
 */
export default function Loading() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fb]">
      {/* Sidebar skeleton */}
      <div className="hidden md:flex flex-col w-70 border-r border-black/10 bg-white shrink-0 p-4 gap-3">
        {/* Logo */}
        <div className="h-8 w-24 rounded-md bg-slate-200 animate-pulse mb-2" />
        {/* New chat button */}
        <div className="h-9 w-full rounded-md bg-slate-100 animate-pulse border border-black/10" />
        {/* Conversation list items */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 px-2 py-2 rounded-md">
            <div
              className="h-4 rounded bg-slate-200 animate-pulse"
              style={{ width: `${55 + (i % 3) * 15}%`, animationDelay: `${i * 80}ms` }}
            />
          </div>
        ))}
      </div>

      {/* Main area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100/80 bg-white/50">
          <div className="flex-1" />
          <div className="h-6 w-28 rounded-full bg-slate-200 animate-pulse" />
          <div className="flex-1 flex justify-end">
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          </div>
        </div>

        {/* Message skeleton area */}
        <div className="flex-1 overflow-hidden py-10 px-4 sm:px-6">
          <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
            {/* Skeleton messages */}
            {[
              { align: "right", widths: [60] },
              { align: "left", widths: [90, 75, 50] },
              { align: "right", widths: [45] },
              { align: "left", widths: [85, 60] },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${row.align === "right" ? "flex-row-reverse" : ""}`}
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse shrink-0 mt-1" style={{ animationDelay: `${i * 100}ms` }} />
                <div className={`flex flex-col gap-1.5 max-w-[75%] ${row.align === "right" ? "items-end" : "items-start"}`}>
                  {row.widths.map((w, j) => (
                    <div
                      key={j}
                      className="h-4 rounded-md bg-slate-200 animate-pulse"
                      style={{ width: `${w}%`, animationDelay: `${(i * 3 + j) * 60}ms` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input skeleton */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pb-6">
          <div className="w-full bg-white border border-black/10 rounded-md p-3 flex flex-col gap-2.5 animate-pulse">
            <div className="h-10 bg-slate-100 rounded" />
            <div className="flex items-center justify-between pt-1 border-t border-black/10">
              <div className="h-7 w-48 bg-slate-100 rounded-md" />
              <div className="h-9 w-9 bg-slate-100 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
