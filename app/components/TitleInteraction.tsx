"use client";

import GearboxOrbit from "./GearboxOrbit";

interface TitleInteractionProps {
  /** When true, only the orbit canvas is shown (e.g. inside editorial Plate) */
  compact?: boolean;
}

export default function TitleInteraction({ compact }: TitleInteractionProps) {
  const canvas = (
    <div
      className={`relative w-full overflow-hidden bg-slate-100 ${compact ? "h-full min-h-[200px] rounded-lg" : "h-40 rounded-2xl border border-slate-200 sm:h-52"}`}
    >
      <GearboxOrbit />
    </div>
  );

  if (compact) {
    return <div className="h-full w-full" aria-label="Interactive orbit">{canvas}</div>;
  }

  return (
    <section
      aria-label="Interactive orbit illustration"
      className="mt-4 rounded-3xl border border-slate-200 bg-slate-50/80 px-4 py-3 font-sans text-xs text-slate-500 shadow-[0_0_40px_rgba(148,163,184,0.15)] sm:px-5 sm:py-4"
    >
      <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-muted-gold shadow-[0_0_10px_rgba(209,199,183,0.6)]" />
          RLWRLD ORBIT VIEW
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden items-center gap-1 sm:inline-flex">
            <span className="h-1.5 w-3 rounded-full bg-slate-300" />
            drag to rotate
          </span>
          <span className="items-center gap-1 sm:inline-flex">
            <span className="h-2 w-2 rounded-full border border-slate-300" />
            scroll to zoom
          </span>
        </span>
      </div>
      {canvas}
    </section>
  );
}

