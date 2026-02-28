import Image from "next/image";
import ChapterGraphic from "../components/ChapterGraphic";
import TitleInteraction from "../components/TitleInteraction";

export default function HomeKo() {
  return (
    <div className="grid-bg min-h-screen bg-white px-4 py-8 font-sans text-slate-800 sm:px-6 lg:px-8 lg:py-12">
      <main className="mx-auto w-full max-w-5xl">
        <header className="border-b border-slate-200 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <a
                href="https://www.rlwrld.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center font-sans text-xs font-medium text-slate-500 transition hover:text-slate-800"
              >
                <span className="mr-1 text-lg">←</span>
                RLWRLD Inc.
              </a>
              <div className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-slate-400">
                2026년 3월 · RLWRLD Lab
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.6rem]">
                Humanoid After All
              </h1>
            </div>

            <nav
              aria-label="Language selector"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1"
            >
              <a href="/" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition hover:ring-accent-muted-blue">
                <Image src="/flags/en.svg" alt="English" width={24} height={24} className="rounded-full" />
              </a>
              <a
                href="/ko"
                aria-current="page"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-accent-muted-blue/70 transition hover:ring-accent-muted-blue"
              >
                <Image src="/flags/ko.svg" alt="한국어" width={24} height={24} className="rounded-full" />
              </a>
              <a href="/ja" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition hover:ring-amber-300">
                <Image src="/flags/ja.svg" alt="日本語" width={24} height={24} className="rounded-full" />
              </a>
            </nav>
          </div>
          <TitleInteraction />
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <aside className="space-y-6 lg:sticky lg:top-10 lg:self-start">
            <section className="rounded-2xl border border-accent-muted-blue/40 bg-accent-muted-blue/10 px-5 py-4 font-serif text-sm text-slate-700 shadow-[0_0_40px_rgba(148,163,184,0.2)]">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted-blue">
                TL;DR
              </p>
              <p className="mt-2 text-slate-700/95">
                세상은 사람 몸에 맞춰 설계돼 있습니다. 바퀴나 단일 암, 태스크 전용
                로봇을 시도해 왔지만—로봇이 일할 공간은 결국 사람을 위해 만든 계단,
                문, 선반입니다. 이 글은 우리가 왜 휴머노이드 형태에 걸었는지, 한 몸으로
                많은 장소를 쓰는 것이 무엇을 의미하는지, 그리고 그 몸이 시뮬이 아니라
                실제 세계에서 학습하도록 만드는 일에 대한 이야기입니다.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 font-sans text-sm text-slate-600">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                목차
              </h2>
              <ol className="mt-3 space-y-1.5 font-serif text-xs text-slate-600 sm:text-[13px]">
                <li>1. 서론: 왜 휴머노이드인가? 세상은 사람 형태다</li>
                <li>2. 문제 · 복잡도 · 접촉 · 관측 가능성 · 안전</li>
                <li>3. 그럼에도 휴머노이드인 이유 · 한 몸, 많은 공간 · 일반화</li>
                <li>4. 우리의 접근 · 실세계 학습 루프 · 시뮬에서 현장까지</li>
                <li>5. 검증 · 라이브 휴머노이드 시스템 · 바닥에 닿는 벤치마크</li>
                <li>6. 결론 · 휴머노이드, 결국</li>
              </ol>
            </section>
          </aside>

          <article className="space-y-10 font-serif text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. 서론: 왜 휴머노이드인가?</h2>
              <ChapterGraphic kind="intro" />
              <p className="mt-3">
                계단, 문손잡이, 눈높이 선반. 우리가 사는 세상은 바퀴나 레일 위의
                단일 암을 위해 설계된 게 아닙니다. 두 발로 서서 두 손을 쓰고, 가는
                방향을 보며 걷는 몸을 위해 설계되었습니다.
              </p>
              <p className="mt-3">
                오랫동안 로봇공학은 그 반대에 올인해 왔습니다. 태스크별 형태. 빈
                픽커, 용접 시임 전용. 제어는 단순해지고 인증도 쉬워졌습니다. 하지만
                한 대의 로봇이 여러 공간을 오가고, 사람과 같은 문과 엘리베이터를
                쓰고, 기계를 다시 설계하지 않고 새 작업을 배우게 하고 싶은 순간,
                식이 바뀝니다.
              </p>
              <p className="mt-3">
                우리는 휴머노이드 형태에 걸었습니다—{" "}
                <span className="font-medium text-accent-muted-blue">휴머노이드, 결국</span>—세상이
                이미 사람 형태로 만들어져 있기 때문입니다. 이 글은 그 선택이 왜
                의미 있는지, 무엇이 어렵게 만드는지, 그리고 휴머노이드가 시뮬이
                아니라 실제 세계에서 학습하도록 만드는 루프를 우리가 어떻게 만들고
                있는지에 대한 이야기입니다.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. 문제</h2>
              <ChapterGraphic kind="problem" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">복잡도</h3>
              <p className="mt-2">
                휴머노이드는 수십 개의 관절, 두 손, 그리고 균형 문제를 가집니다.
                한 걸음마다 언더액추에이션되고, 닿기와 파지가 자세와 결합합니다.
                대부분의 러닝 스택은 더 단순한 형태—한 개 암, 또는 고정된 몸통의
                사족 보행—를 위해 만들어졌습니다. 실제 세계에서 전신 휴머노이드
                제어로 확장한다는 것은 모델링하기 어렵고 샘플링 비용이 큰 고차원
                접촉 동역학을 다룬다는 뜻입니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">접촉</h3>
              <p className="mt-2">
                휴머노이드는 공중에 떠 있지 않습니다. 서고, 밀고, 잡습니다. 접촉은
                부수 효과가 아니라 일을 하는 주 채널입니다. 시뮬에서는 접촉이
                단순화되거나 정규화되는 경우가 많습니다. 현장에서는 잘못된 한 걸음,
                미끄러진 파지가 실제 비용을 냅니다. 도메인 랜덤만으로는 해결되지
                않고, 실제 접촉에서 안전하게 학습하는 루프가 필요합니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">관측 가능성과 안전</h3>
              <p className="mt-2">
                전신 상태가 완벽하게 관측되는 경우는 없습니다. 카메라는 가리고,
                조인트 인코더는 드리프트합니다. 휴머노이드는 사람과 같은 공간을
                쓰기 때문에 안전은 선택이 아닙니다. 모든 실험이 검토·리셋·복구라는
                세금을 냅니다.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. 그럼에도 휴머노이드인 이유</h2>
              <ChapterGraphic kind="why" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">한 몸, 많은 공간</h3>
              <p className="mt-2">
                창고, 공장, 가정은 로봇을 위해 설계되지 않았습니다. 사람을 위해
                설계되었습니다. 휴머노이드는 건물마다 새 경사로나 전용 설비가 필요하지 않습니다. 사람이 쓰는 인프라를 그대로 씁니다.
              </p>
              <p className="mt-2">
                그건 통합 비용만 줄이는 게 아닙니다. 하나의 플랫폼이 형태를 바꾸지
                않고도 작업과 장소 사이를 오갈 수 있다는 뜻입니다. 한 몸으로 많은 곳을 쓰는 것입니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">일반화</h3>
              <p className="mt-2">
                태스크 전용 로봇은 한 가지 일, 한 가지 문맥에서 뛰어납니다.
                휴머노이드는 만들고 튜닝하기 더 어렵지만, 그 대가는 환경과
                태스크에 걸쳐 일반화하는 형태입니다. 세상은 이미 휴머노이드에 맞춰져 있고, 그 안에서 학습할 수 있는 기계를 만들면 됩니다.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. 우리의 접근</h2>
              <ChapterGraphic kind="solution" />
              <p className="mt-3">
                RLWRLD는 휴머노이드가 시뮬이 아니라 실제 세계에서 학습하도록
                만드는 루프를 만들고 있습니다. 휴머노이드 정책이 훈련·검증·배포되는
                지속적인 실험 레일이고, 소프트웨어와 같은 규율로 돌아갑니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">실세계 학습 루프</h3>
              <p className="mt-2">
                우리는 현장을 프로그래밍 가능한 환경으로 취급합니다. 시나리오(보행,
                파지, 운반, 복구)는 그래프로 정의되고, 모든 조인트·센서·안전 이벤트가
                로깅되며, 실험은 휴머노이드 하드웨어에 스케줄됩니다. 수많은 작고
                한정된 실험을 돌리며 실제 접촉과 실제 실패에서 학습합니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">시뮬에서 현장까지</h3>
              <p className="mt-2">
                시뮬은 여전히 샘플이 많이 드는 훈련의 대부분을 담당합니다. 하지만
                휴머노이드의 시뮬–실제 격차는 가혹합니다. 그래서 루프를 닫습니다.
                시뮬에서 잘 하는 정책은 스테이징 환경의 실제 휴머노이드에서 검증된 뒤,
                가드레일과 카나리 롤아웃과 함께 라이브 배포로 올라갑니다.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">5. 검증</h2>
              <ChapterGraphic kind="validation" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">라이브 휴머노이드 시스템</h3>
              <p className="mt-2">
                실제 휴머노이드 배포에서는 하루 실세계 에피소드 수, 아이디어에서
                실제 하드웨어 결과까지의 실험 왕복 시간, 사고를 이해하고 대응하는
                데 걸리는 시간을 추적합니다. 소규모 팀이 휴머노이드를 현장에서 지치지 않고 계속 학습시킬 수 있는지가 핵심입니다.
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">바닥에 닿는 벤치마크</h3>
              <p className="mt-2">
                실제 휴머노이드 태스크—보행, 조작, 복구—에 명확히 대응하는
                벤치마크를 씁니다. 시뮬에서는 비슷해 보이던 정책이 바닥에
                내려가면 크게 갈리는 경우를 이미 여러 번 봤고, 우리 루프로 훈련된
                정책은 조용히 실패하기보다 복구하고 적응하는 쪽을 택했습니다.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. 결론</h2>
              <ChapterGraphic kind="conclusion" />
              <p className="mt-3">
                세상은 사람 형태로 만들어져 있습니다. 태스크마다 로봇 한 대, 건물마다
                형태 하나씩 만들 수도 있습니다. 아니면 이미 맞춰져 있는 형태를
                만들 수 있습니다. 두 다리, 두 손, 사람이 가는 곳에 가는 몸.
              </p>
              <p className="mt-2">
                휴머노이드, 결국. 쉬워서가 아니라, 우리가 일하게 만들고 싶은
                환경이 이미 이 형태를 위해 설계돼 있기 때문입니다. RLWRLD는
                휴머노이드가 그 세상에서—날마다, 현장에서, 별일 없이—학습하는
                루프를 만들고 있습니다.
              </p>
            </section>
          </article>

          <footer className="mt-12 border-t border-slate-200 pt-6 text-center font-sans text-xs text-slate-500">
            <a
              href="https://www.rlwrld.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition hover:text-slate-900"
            >
              RLWRLD Inc.
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}
