"use client";

import GearboxOrbit from "./GearboxOrbit";

export default function TitleInteraction() {

  return (
    <section
      aria-label="Interactive orbit illustration"
      className="mt-4 rounded-3xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-xs text-zinc-400 shadow-[0_0_40px_rgba(56,189,248,0.3)] sm:px-5 sm:py-4"
    >
      <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          RLWRLD ORBIT VIEW
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden items-center gap-1 sm:inline-flex">
            <span className="h-1.5 w-3 rounded-full bg-zinc-500/80" />
            drag to rotate
          </span>
          <span className="items-center gap-1 sm:inline-flex">
            <span className="h-2 w-2 rounded-full border border-zinc-500/80" />
            scroll to zoom
          </span>
        </span>
      </div>
      <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-sky-950 via-zinc-950 to-black sm:h-52">
        <GearboxOrbit />
      </div>
    </section>
  );
}

