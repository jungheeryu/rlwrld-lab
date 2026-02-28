"use client";

import { useState } from "react";

type ChapterKind = "intro" | "problem" | "why" | "solution" | "validation" | "conclusion";

interface ChapterGraphicProps {
  kind: ChapterKind;
}

const accentByKind: Record<ChapterKind, string> = {
  intro: "from-sky-400/80 via-sky-500/40 to-sky-900/0",
  problem: "from-rose-400/80 via-rose-500/40 to-rose-900/0",
  why: "from-amber-300/80 via-amber-400/40 to-amber-900/0",
  solution: "from-emerald-400/80 via-emerald-500/40 to-emerald-900/0",
  validation: "from-indigo-400/80 via-indigo-500/40 to-indigo-900/0",
  conclusion: "from-fuchsia-400/80 via-fuchsia-500/40 to-fuchsia-900/0",
};

export default function ChapterGraphic({ kind }: ChapterGraphicProps) {
  const [phase, setPhase] = useState(0);

  const handlePointerMove: React.PointerEventHandler<HTMLButtonElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const next = Math.min(2, Math.max(0, Math.floor(ratio * 3)));
    if (next !== phase) {
      setPhase(next);
    }
  };

  const handlePointerLeave = () => {
    setPhase(0);
  };

  const accent = accentByKind[kind];

  return (
    <button
      type="button"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Toggle chapter infographic state"
      className="group relative mt-3 flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-950/70 text-left outline-none ring-0 transition hover:border-zinc-500 hover:bg-zinc-900/80 focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:h-36"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-60 mix-blend-screen`}
      />
      <div className="relative flex h-full w-full items-stretch justify-stretch gap-4 px-5">
        {kind === "intro" && (
          <IntroHumanShapedWorld phase={phase} />
        )}
        {kind === "problem" && (
          <ProblemComplexityContact phase={phase} />
        )}
        {kind === "why" && (
          <WhyOneBodyManySpaces phase={phase} />
        )}
        {kind === "solution" && (
          <SolutionSimToFloor phase={phase} />
        )}
        {kind === "validation" && (
          <ValidationHitTheFloor phase={phase} />
        )}
        {kind === "conclusion" && (
          <ConclusionFormThatFits phase={phase} />
        )}
      </div>
    </button>
  );
}

/** Ch1: Stairs, doorknobs, shelves at eye level — world is human-shaped. Humanoid fits. */
function IntroHumanShapedWorld({ phase }: { phase: number }) {
  const highlight = phase; // 0=stairs, 1=door, 2=shelf
  return (
    <div className="flex h-full w-full items-end justify-center gap-4 sm:gap-6">
      {/* Stairs */}
      <div
        className={`flex flex-col items-end gap-0.5 transition-all ${
          highlight === 0 ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="h-2 w-6 rounded-sm border border-sky-400/60 bg-sky-500/20" />
        <div className="h-2 w-7 rounded-sm border border-sky-400/60 bg-sky-500/20" />
        <div className="h-2 w-8 rounded-sm border border-sky-400/60 bg-sky-500/20" />
        <div className="h-2 w-9 rounded-sm border border-sky-400/60 bg-sky-500/20" />
      </div>
      {/* Door + doorknob */}
      <div
        className={`relative flex h-16 w-8 flex-col items-center justify-center rounded border transition-all ${
          highlight === 1 ? "border-sky-300 bg-sky-500/25" : "border-sky-500/50 bg-sky-900/30"
        }`}
      >
        <div className="absolute right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-sky-300 bg-sky-200/90" />
      </div>
      {/* Shelf at eye level */}
      <div
        className={`flex flex-col gap-1 transition-all ${
          highlight === 2 ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="h-1 w-10 rounded-full bg-sky-400/50" />
        <div className="flex gap-1">
          <div className="h-4 w-3 rounded border border-sky-500/40 bg-sky-600/20" />
          <div className="h-4 w-3 rounded border border-sky-500/40 bg-sky-600/20" />
        </div>
      </div>
      {/* Humanoid that fits: head + body + two legs + two arms */}
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-sky-300/80 bg-sky-400/30" />
        <div className="h-4 w-2 rounded-sm border border-sky-400/60 bg-sky-500/20" />
        <div className="flex gap-2">
          <div className="h-4 w-1 rounded-full bg-sky-400/60" />
          <div className="h-4 w-1 rounded-full bg-sky-400/60" />
        </div>
        <div className="flex gap-3">
          <div className="h-3 w-1 rounded-full bg-sky-400/50" />
          <div className="h-3 w-1 rounded-full bg-sky-400/50" />
        </div>
      </div>
    </div>
  );
}

/** Ch2: Complexity (joints, balance), Contact (feet, grasp), Observability & Safety */
function ProblemComplexityContact({ phase }: { phase: number }) {
  // phase 0: many joints + balance tilt. phase 1: contact (ground, object). phase 2: partial view + safety boundary
  return (
    <div className="flex h-full w-full items-end justify-center gap-6">
      {/* Humanoid with many joint nodes */}
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-2 rounded-xl border border-rose-400/20 bg-rose-950/30 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className={`mb-0.5 h-2.5 w-2.5 rounded-full border-2 transition ${
          phase === 0 ? "border-rose-300 bg-rose-400/40" : "border-rose-500/50 bg-rose-900/50"
        }`} />
        <div className="h-1 w-1 rounded-full bg-rose-500/70" />
        <div className="flex gap-2">
          <div className="h-1.5 w-1.5 rounded-full border border-rose-500/60 bg-rose-600/30" />
          <div className="h-1.5 w-1.5 rounded-full border border-rose-500/60 bg-rose-600/30" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-1 rounded-full bg-rose-500/50" />
          <div className="h-2 w-1 rounded-full bg-rose-500/50" />
        </div>
        {/* Contact: feet on ground */}
        <div className="flex gap-2">
          <div className={`h-1.5 w-3 rounded-sm border transition ${
            phase === 1 ? "border-rose-300 bg-rose-400/30" : "border-rose-600/50 bg-rose-900/40"
          }`} />
          <div className={`h-1.5 w-3 rounded-sm border transition ${
            phase === 1 ? "border-rose-300 bg-rose-400/30" : "border-rose-600/50 bg-rose-900/40"
          }`} />
        </div>
      </div>
      {/* Contact object (grasp) */}
      <div className={`flex h-8 w-6 items-center justify-center rounded border transition ${
        phase === 1 ? "border-rose-300 bg-rose-400/20" : "border-zinc-600 bg-zinc-800/50"
      }`}>
        <span className="h-1 w-1 rounded-full bg-rose-400/60" />
      </div>
      {/* Observability: blurred / partial view */}
      <div className={`flex h-14 w-14 items-center justify-center rounded-xl border transition ${
        phase === 2 ? "border-rose-300/70 bg-rose-500/10" : "border-zinc-600 bg-zinc-800/40"
      }`}>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-6 w-1 rounded-full transition ${
                phase === 2 ? "bg-rose-400/50 opacity-60" : "bg-zinc-600"
              }`}
              style={{ height: `${12 + (i % 3) * 4}px` }}
            />
          ))}
        </div>
      </div>
      {/* Safety: boundary / shield */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition ${
        phase === 2 ? "border-rose-300/80 bg-rose-500/10" : "border-zinc-600/60 bg-transparent"
      }`}>
        <div className="h-4 w-2 rounded border border-rose-500/40 bg-rose-600/20" />
      </div>
    </div>
  );
}

/** Ch3: One body, many spaces — same robot: door, stairs, shelf */
function WhyOneBodyManySpaces({ phase }: { phase: number }) {
  const active = phase; // 0=door, 1=stairs, 2=shelf
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 sm:gap-4">
      {/* Central humanoid */}
      <div className="flex flex-shrink-0 flex-col items-center">
        <div className="h-4 w-4 rounded-full border-2 border-amber-300/80 bg-amber-400/20" />
        <div className="h-5 w-2 rounded border border-amber-400/50 bg-amber-500/20" />
        <div className="flex gap-2">
          <div className="h-5 w-1.5 rounded-full bg-amber-400/60" />
          <div className="h-5 w-1.5 rounded-full bg-amber-400/60" />
        </div>
        <div className="flex gap-2">
          <div className="h-4 w-1 rounded-full bg-amber-400/50" />
          <div className="h-4 w-1 rounded-full bg-amber-400/50" />
        </div>
      </div>
      {/* Spaces: door, stairs, shelf */}
      <div className="flex flex-1 items-center justify-around gap-2">
        <div className={`flex flex-col items-center gap-0.5 rounded-lg border px-2 py-1.5 transition ${
          active === 0 ? "border-amber-300 bg-amber-500/20" : "border-zinc-600 bg-zinc-900/50"
        }`}>
          <div className="h-4 w-3 rounded border border-current opacity-70" />
          <div className="h-1 w-1 rounded-full bg-current opacity-80" />
          <span className="text-[9px] uppercase tracking-wider opacity-80">door</span>
        </div>
        <div className={`flex flex-col items-end gap-0.5 rounded-lg border px-2 py-1.5 transition ${
          active === 1 ? "border-amber-300 bg-amber-500/20" : "border-zinc-600 bg-zinc-900/50"
        }`}>
          <div className="h-1 w-3 rounded-sm bg-current opacity-60" />
          <div className="h-1 w-3.5 rounded-sm bg-current opacity-60" />
          <div className="h-1 w-4 rounded-sm bg-current opacity-60" />
          <span className="text-[9px] uppercase tracking-wider opacity-80">stairs</span>
        </div>
        <div className={`flex flex-col items-center gap-0.5 rounded-lg border px-2 py-1.5 transition ${
          active === 2 ? "border-amber-300 bg-amber-500/20" : "border-zinc-600 bg-zinc-900/50"
        }`}>
          <div className="h-0.5 w-6 rounded-full bg-current opacity-60" />
          <div className="flex gap-0.5">
            <div className="h-3 w-2 rounded border border-current opacity-50" />
            <div className="h-3 w-2 rounded border border-current opacity-50" />
          </div>
          <span className="text-[9px] uppercase tracking-wider opacity-80">shelf</span>
        </div>
      </div>
    </div>
  );
}

/** Ch4: Sim → Staged → Live floor. Real-world learning loop. */
function SolutionSimToFloor({ phase }: { phase: number }) {
  const steps: { label: string; icon: "cube" | "robot" | "floor" }[] = [
    { label: "Sim", icon: "cube" },
    { label: "Staged", icon: "robot" },
    { label: "Live", icon: "floor" },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center gap-0 sm:gap-1">
      {steps.map((step, i) => {
        const isActive = i <= phase;
        const isCurrent = i === phase;
        return (
          <div key={step.label} className="flex flex-1 items-center gap-0 sm:gap-1">
            <div className="flex flex-1 flex-col items-center gap-1">
              <div
                className={`flex h-14 w-full max-w-[70px] items-center justify-center rounded-xl border-2 transition sm:h-16 ${
                  isActive ? "border-emerald-300/80 bg-emerald-500/20" : "border-zinc-700 bg-zinc-900/70"
                } ${isCurrent ? "ring-2 ring-emerald-400/50" : ""}`}
              >
                {step.icon === "cube" && (
                  <div className={`h-6 w-6 rounded border-2 transition ${
                    isActive ? "border-emerald-300 bg-emerald-400/30" : "border-zinc-600"
                  }`} />
                )}
                {step.icon === "robot" && (
                  <div className="flex flex-col items-center">
                    <div className={`h-2 w-2 rounded-full border-2 transition ${
                      isActive ? "border-emerald-300 bg-emerald-400/40" : "border-zinc-500"
                    }`} />
                    <div className={`h-3 w-1.5 rounded border transition ${
                      isActive ? "border-emerald-400/60" : "border-zinc-600"
                    }`} />
                    <div className="flex gap-0.5">
                      <div className={`h-2 w-0.5 rounded-full ${isActive ? "bg-emerald-400/60" : "bg-zinc-600"}`} />
                      <div className={`h-2 w-0.5 rounded-full ${isActive ? "bg-emerald-400/60" : "bg-zinc-600"}`} />
                    </div>
                  </div>
                )}
                {step.icon === "floor" && (
                  <div className="flex flex-col items-center gap-0.5">
                    <div className={`h-3 w-2 rounded border ${isActive ? "border-emerald-300" : "border-zinc-500"}`} />
                    <div className={`h-0.5 w-8 rounded-full ${isActive ? "bg-emerald-400/70" : "bg-zinc-600"}`} />
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-medium uppercase tracking-wider ${
                isActive ? "text-emerald-200/90" : "text-zinc-500"
              }`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 w-2 flex-shrink-0 rounded-full sm:w-3 ${
                  i < phase ? "bg-emerald-400/60" : "bg-zinc-700"
                }`}
                aria-hidden
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/** Ch5: Benchmarks that hit the floor. Live metrics (episodes, turnaround). */
function ValidationHitTheFloor({ phase }: { phase: number }) {
  const metrics = [6, 10, 4, 9, 8];
  const offset = phase * 2;
  return (
    <div className="flex h-full w-full items-end justify-center gap-3 sm:gap-4">
      {/* Sim (above) vs Floor (on line): hit the floor */}
      <div className="flex flex-col items-center">
        <div className={`mb-1 h-4 w-3 rounded border transition ${
          phase >= 1 ? "border-indigo-400/30 bg-indigo-500/10 opacity-50" : "border-indigo-400/50 bg-indigo-500/20"
        }`} />
        <span className="text-[9px] text-zinc-500">sim</span>
        <div className="my-0.5 h-px w-8 rounded-full bg-indigo-500/50" />
        <div className="flex flex-col items-center">
          <div className={`h-5 w-3 rounded border-2 transition ${
            phase >= 1 ? "border-indigo-300 bg-indigo-400/30" : "border-zinc-600 bg-zinc-800"
          }`} />
          <span className="text-[9px] text-indigo-200/80">floor</span>
        </div>
      </div>
      {/* Live metrics bars */}
      <div className="flex flex-1 items-end gap-1">
        {metrics.map((base, i) => {
          const h = Math.min(28, base + offset + (i % 2));
          return (
            <div
              key={i}
              className="flex-1 rounded-t bg-indigo-400/80 transition-all group-hover:bg-indigo-300/90"
              style={{ height: `${h}px` }}
            />
          );
        })}
      </div>
      <div className="flex flex-shrink-0 flex-col justify-end gap-0.5 text-[9px] text-zinc-500">
        <span>ep/day</span>
        <span>turnaround</span>
      </div>
    </div>
  );
}

/** Ch6: Two legs, two hands. The form that already fits. Humanoid after all. */
function ConclusionFormThatFits({ phase }: { phase: number }) {
  const highlight = phase === 1 || phase === 2;
  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* World outline: humanoid-shaped slot that fits */}
      <div className={`relative flex h-24 w-24 items-end justify-center overflow-hidden rounded-t-xl border-2 transition sm:w-28 ${
        highlight ? "border-fuchsia-300/60 bg-fuchsia-500/5" : "border-zinc-600/80 bg-zinc-900/40"
      }`}>
        {/* Humanoid inside: two legs, two hands */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className={`mb-0.5 h-4 w-4 rounded-full border-2 transition ${
            highlight ? "border-fuchsia-300 bg-fuchsia-400/30" : "border-fuchsia-500/50 bg-fuchsia-600/20"
          }`} />
          <div className={`h-5 w-3 rounded border-2 transition ${
            highlight ? "border-fuchsia-300 bg-fuchsia-400/20" : "border-fuchsia-500/50"
          }`} />
          <div className="flex gap-2">
            <div className={`h-5 w-1.5 rounded-full transition ${
              highlight ? "bg-fuchsia-300/90" : "bg-fuchsia-500/60"
            }`} />
            <div className={`h-5 w-1.5 rounded-full transition ${
              highlight ? "bg-fuchsia-300/90" : "bg-fuchsia-500/60"
            }`} />
          </div>
          <div className="flex gap-2">
            <div className={`h-4 w-1.5 rounded-full transition ${
              highlight ? "bg-fuchsia-300/80" : "bg-fuchsia-500/50"
            }`} />
            <div className={`h-4 w-1.5 rounded-full transition ${
              highlight ? "bg-fuchsia-300/80" : "bg-fuchsia-500/50"
            }`} />
          </div>
        </div>
      </div>
      <div className="ml-2 flex flex-col gap-0.5 text-[10px] uppercase tracking-wider text-fuchsia-200/80">
        <span>two legs</span>
        <span>two hands</span>
        <span className="text-fuchsia-300/90">fits</span>
      </div>
    </div>
  );
}
