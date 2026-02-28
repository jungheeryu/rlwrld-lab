import Image from "next/image";
import ChapterGraphic from "./components/ChapterGraphic";
import TitleInteraction from "./components/TitleInteraction";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] px-4 py-8 font-sans text-zinc-100 sm:px-6 lg:px-8 lg:py-12">
      <main className="mx-auto w-full max-w-5xl">
        <header className="border-b border-zinc-800 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <a
                href="https://www.rlwrld.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center text-xs font-medium text-zinc-400 transition hover:text-zinc-200"
              >
                <span className="mr-1 text-lg">←</span>
                RLWRLD Inc.
              </a>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                March 2026 · RLWRLD Lab
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-[2.6rem]">
                Humanoid After All
              </h1>
            </div>

            <nav
              aria-label="Language selector"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-2 py-1"
            >
              <a
                href="/"
                aria-current="page"
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-sky-500/70 transition hover:ring-sky-400"
              >
                <Image
                  src="/flags/en.svg"
                  alt="English"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </a>
              <a
                href="/ko"
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-700 transition hover:ring-emerald-400"
              >
                <Image
                  src="/flags/ko.svg"
                  alt="한국어"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </a>
              <a
                href="/ja"
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-700 transition hover:ring-amber-300"
              >
                <Image
                  src="/flags/ja.svg"
                  alt="日本語"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </a>
            </nav>
          </div>
          <TitleInteraction />
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <aside className="space-y-6 lg:sticky lg:top-10 lg:self-start">
            <section className="rounded-2xl border border-sky-500/40 bg-sky-500/10 px-5 py-4 text-sm text-sky-50 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                TL;DR
              </p>
              <p className="mt-2 text-sky-50/95">
                The world is built for human bodies. We tried wheels, arms, and
                task‑specific bots—but the spaces we want robots to work in are
                stairs, doors, and shelves made for us. This piece is about why we’re
                betting on the humanoid form: one body for many places, and what it
                takes to make that body learn in the real world, not just in sim.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-5 py-4 text-sm text-zinc-300">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Contents
              </h2>
              <ol className="mt-3 space-y-1.5 text-xs sm:text-[13px]">
                <li>
                  1. Introduction: Why humanoid? The world is human‑shaped
                </li>
                <li>
                  2. The Problem · Complexity · Contact · Observability · Safety
                </li>
                <li>
                  3. Why Humanoids Anyway · One body, many spaces · Generalization
                </li>
                <li>
                  4. Our Approach · Real‑world learning loop · From sim to floor
                </li>
                <li>5. Validation · Live humanoid systems · Benchmarks that hit the floor</li>
                <li>6. Conclusion · Humanoid after all</li>
              </ol>
            </section>
          </aside>

          <article className="space-y-10 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
            <section>
              <h2 className="text-lg font-semibold text-zinc-50">
                1. Introduction: Why humanoid?
              </h2>
              <ChapterGraphic kind="intro" />
              <p className="mt-3">
                Stairs. Doorknobs. Shelves at eye level. The world we live in wasn’t
                designed for wheels or for a single arm on a rail. It was designed for
                bipedal bodies with two hands and a head that looks where it’s going.
              </p>
              <p className="mt-3">
                For a long time, robotics leaned into the opposite: task‑specific
                morphologies. A picker for the bin. A welder for the seam. It made
                sense—simpler to control, easier to certify. But the moment you want
                one robot to move between spaces, use the same doors and elevators as
                people, or pick up a new task without redesigning the machine, the
                math changes.
              </p>
              <p className="mt-3">
                We’re betting on the humanoid form—<span className="font-medium text-sky-300">humanoid after all</span>—because
                the world is already human‑shaped. This piece is about why that bet
                matters, what makes it hard, and how we’re building the loop that lets
                humanoids learn in the real world, not just in simulation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">2. The Problem</h2>
              <ChapterGraphic kind="problem" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                Complexity
              </h3>
              <p className="mt-2">
                A humanoid has dozens of joints, two hands, and a balance problem. Every
                step is underactuated. Every reach couples posture and grip. Most
                learning stacks were built for simpler morphologies: one arm, or a
                quadruped with a fixed torso. Scaling to full humanoid control in the
                real world means dealing with high‑dimensional, contact‑rich dynamics
                that are hard to model and expensive to sample.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">Contact</h3>
              <p className="mt-2">
                Humanoids don’t float. They stand, push, and grasp. Contact isn’t a
                side effect—it’s the primary channel for doing work. In sim, contact is
                often simplified or regularized. On the floor, a bad step or a slipped
                grip has real cost: the robot falls, the object breaks, or someone gets
                in the way. You can’t domain‑randomize your way out of that; you need
                a loop that learns from real contact, safely.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                Observability &amp; Safety
              </h3>
              <p className="mt-2">
                Full‑body state is never perfectly observed. Cameras occlude. Joint
                encoders drift. And because humanoids share space with people, safety
                isn’t optional—every experiment pays a tax in review, reset, and
                recovery. If your infrastructure can’t run many small, bounded
                experiments and roll back fast when something goes wrong, humanoid
                learning in the real world stays stuck at “a few demos per month.”
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">
                3. Why Humanoids Anyway
              </h2>
              <ChapterGraphic kind="why" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                One body, many spaces
              </h3>
              <p className="mt-2">
                Warehouses, factories, and homes weren’t designed for robots. They were
                designed for humans. Stairs, door widths, counter heights, and tool
                handles all assume a bipedal body with two arms. A humanoid doesn’t
                need a new ramp or a custom fixture for every new building—it fits the
                same infrastructure people use.
              </p>
              <p className="mt-2">
                That doesn’t just reduce integration cost. It means one platform can
                move between tasks and locations without remorphing. The same robot
                that walks the aisle can climb a ladder, open a door, or pick from a
                shelf. One body, many places.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">Generalization</h3>
              <p className="mt-2">
                Task‑specific robots excel at one thing and one context. Humanoids are
                harder to build and tune—but the payoff is a form factor that
                generalizes across environments and tasks. We’re not claiming they’re
                easy. We’re claiming they’re worth it: the world is humanoid‑ready
                already; we just have to make the machines that can learn to live in it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">4. Our Approach</h2>
              <ChapterGraphic kind="solution" />
              <p className="mt-3">
                At RLWRLD, we’re building the loop that lets humanoids learn in the
                real world—not just in sim. That means a continuous experiment rail
                where humanoid policies are trained, validated, and shipped with the
                same discipline as software: bounded runs, full telemetry, and fast
                rollback.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                Real‑world learning loop
              </h3>
              <p className="mt-2">
                We treat the floor as a programmable environment. Scenarios (walk,
                grasp, carry, recover) are defined as graphs; every joint, sensor, and
                safety event is logged; experiments schedule onto humanoid hardware the
                same way jobs schedule onto a cluster. So instead of “deploy this
                policy and hope,” we run many small, bounded experiments and learn from
                real contact and real failure.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                From sim to floor
              </h3>
              <p className="mt-2">
                Sim is still where we do most of our sample‑heavy training. But the
                sim‑to‑real gap for humanoids is brutal: balance, contact, and
                partial observability all bite at once. So we close the loop: policies
                that perform in sim get validated on real humanoids in staged
                environments, then promoted to live deployment with guardrails and
                canary rollouts. The goal is a steady state where humanoids learn from
                the real world every day, without burning the robot or the team.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">5. Validation</h2>
              <ChapterGraphic kind="validation" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                Live humanoid systems
              </h3>
              <p className="mt-2">
                On active humanoid deployments, we track real‑world episodes per day,
                experiment turnaround from idea to results on real hardware, and
                incident half‑life—how fast we can understand and fix failures. We
                care less about a single perfect demo and more about operational
                tempo: can a small team keep humanoids learning on the floor without
                burning out?
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                Benchmarks that hit the floor
              </h3>
              <p className="mt-2">
                We use benchmarks that map clearly to real humanoid tasks: locomotion,
                manipulation, and recovery. The ones that matter are the ones that
                run on real hardware and stress balance, contact, and safety. We’ve
                seen policies that look similar in sim diverge sharply when they hit
                the floor—but the ones trained through our loop recover and adapt
                instead of silently failing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">6. Conclusion</h2>
              <ChapterGraphic kind="conclusion" />
              <p className="mt-3">
                The world is human‑shaped. We can keep building one robot per task and
                one morphology per building—or we can build the form that already
                fits: two legs, two hands, a body that goes where people go.
              </p>
              <p className="mt-2">
                Humanoid after all. Not because it’s easy, but because the environment
                we want to work in was built for this shape. RLWRLD is building the
                loop that lets humanoids learn in that world—day after day, on the
                floor, without drama.
              </p>
            </section>
          </article>

          <footer className="mt-12 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
            <a
              href="https://www.rlwrld.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-zinc-200"
            >
              RLWRLD Inc.
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}
