import Image from "next/image";
import ChapterGraphic from "../components/ChapterGraphic";
import TitleInteraction from "../components/TitleInteraction";

export default function HomeJa() {
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
                2026年3月 · RLWRLD Lab
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
              <a href="/ko" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition hover:ring-emerald-400">
                <Image src="/flags/ko.svg" alt="한국어" width={24} height={24} className="rounded-full" />
              </a>
              <a
                href="/ja"
                aria-current="page"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-accent-muted-blue/70 transition hover:ring-accent-muted-blue"
              >
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
                世界は人の身体に合わせてつくられています。車輪や単腕、タスク特化型ロボットを
                試してきましたが、ロボットが働く空間は結局のところ人間用の階段・ドア・棚です。
                本稿では、なぜヒューマノイド形態に賭けているのか、一つの身体で多くの場所を
                カバーするとはどういうことか、そしてその身体がシミュではなく現実世界で
                学ぶようにするために何が必要かを述べます。
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 font-sans text-sm text-slate-600">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                目次
              </h2>
              <ol className="mt-3 space-y-1.5 font-serif text-xs text-slate-600 sm:text-[13px]">
                <li>1. はじめに: なぜヒューマノイドか？ 世界は人の形</li>
                <li>2. 問題 · 複雑さ · コンタクト · 観測性 · セーフティ</li>
                <li>3. それでもヒューマノイドである理由 · 一身体・多くの空間 · 汎化</li>
                <li>4. 私たちのアプローチ · 実世界学習ループ · シミュからフロアへ</li>
                <li>5. 検証 · ライブヒューマノイドシステム · フロアに届くベンチマーク</li>
                <li>6. 結論 · Humanoid After All</li>
              </ol>
            </section>
          </aside>

          <article className="space-y-10 font-serif text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. はじめに: なぜヒューマノイドか？</h2>
              <ChapterGraphic kind="intro" />
              <p className="mt-3">
                階段。ドアノブ。目の高さの棚。私たちが住む世界は、車輪やレール上の
                単腕のために設計されたのではありません。二足で立ち、両手を使い、
                行く先を見て歩く身体のために設計されました。
              </p>
              <p className="mt-3">
                長いあいだロボティクスはその逆に振れていました。タスク特化の形態。
                ロボットが複数の空間を行き来し、人と同じドアやエレベーターを使い、
                機械を再設計せずに新しいタスクを学ぶ必要が生じた瞬間、式が変わります。
              </p>
              <p className="mt-3">
                私たちはヒューマノイド形態に賭けています—
                <span className="font-medium text-accent-muted-blue">Humanoid After All</span>—世界が
                すでに人の形をしているからです。本稿では、その賭けがなぜ意味を持つか、
                何がそれを難しくするか、そしてヒューマノイドがシミュではなく現実世界で
                学ぶためのループを私たちがどうつくっているかを述べます。
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. 問題</h2>
              <ChapterGraphic kind="problem" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">複雑さ</h3>
              <p className="mt-2">
                ヒューマノイドは何十もの関節、両手、そしてバランス問題を抱えています。
                一歩ごとにアンダーアクチュエートされ、リーチとグリップが姿勢と結合します。
                実世界で全身ヒューマノイド制御にスケールするとは、モデル化が難しく
                サンプリングコストの高い高次元・コンタクトリッチなダイナミクスを扱うということです。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">コンタクト</h3>
              <p className="mt-2">
                ヒューマノイドは浮いていません。立ち、押し、把持します。コンタクトは
                副次的効果ではなく、仕事をする主な経路です。フロアでは、一歩の誤りや
                滑ったグリップが現実のコストを生みます。実コンタクトから安全に学ぶループが必要です。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">観測性とセーフティ</h3>
              <p className="mt-2">
                全身状態が完璧に観測されることはありません。ヒューマノイドは人と同じ空間を
                共有するため、セーフティはオプションではありません。あらゆる実験が
                レビュー・リセット・リカバリというタックスを払います。
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. それでもヒューマノイドである理由</h2>
              <ChapterGraphic kind="why" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">一身体・多くの空間</h3>
              <p className="mt-2">
                倉庫、工場、家庭はロボットのために設計されていません。人のために
                設計されています。ヒューマノイドは建物ごとに新しいスロープや専用治具を
                必要としません。人が使うインフラをそのまま使います。一つの身体で多くの場所をカバーするのです。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">汎化</h3>
              <p className="mt-2">
                タスク特化ロボットは一つのこと、一つの文脈で優れます。
                ヒューマノイドはつくり込み・チューニングが難しい代わりに、
                環境とタスクにわたって汎化する形態というリターンがあります。世界はすでにヒューマノイド向けにできており、そのなかで学べる機械をつくればいい。
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. 私たちのアプローチ</h2>
              <ChapterGraphic kind="solution" />
              <p className="mt-3">
                RLWRLD はヒューマノイドがシミュではなく現実世界で学ぶための
                ループを構築しています。ヒューマノイドポリシーが訓練・検証・
                シップされる継続実験レールであり、ソフトウェアと同様の規律で回します。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">実世界学習ループ</h3>
              <p className="mt-2">
                私たちはフロアをプログラム可能な環境として扱います。シナリオ
                （歩行、把持、運搬、リカバリ）はグラフで定義され、すべての
                ジョイント・センサー・セーフティイベントがログされ、実験は
                ヒューマノイドハードウェアにスケジュールされます。多くの小さな
                有界実験を回し、実コンタクトと実失敗から学びます。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">シミュからフロアへ</h3>
              <p className="mt-2">
                シミュは依然としてサンプルを大量に消費する訓練の大半を担います。
                ヒューマノイドの sim-to-real ギャップは厳しい。だからループを閉じます。
                シミュで良い成績のポリシーは、ステージング環境の実ヒューマノイドで
                検証され、ガードレールとカナリアロールアウト付きでライブデプロイに昇格します。
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">5. 検証</h2>
              <ChapterGraphic kind="validation" />
              <h3 className="mt-4 font-sans text-sm font-semibold text-slate-800">ライブヒューマノイドシステム</h3>
              <p className="mt-2">
                実際のヒューマノイドデプロイでは、1 日あたりの実世界エピソード数、
                アイデアから実機結果までの実験ターンアラウンド、インシデントを
                理解し対策するまでの時間を追跡します。少人数チームがヒューマノイドを
                フロアで燃え尽きずに学ばせ続けられるかが鍵です。
              </p>
              <h3 className="mt-5 font-sans text-sm font-semibold text-slate-800">フロアに届くベンチマーク</h3>
              <p className="mt-2">
                実ヒューマノイドタスク—ロコモーション、マニピュレーション、リカバリ—に
                明確に対応するベンチマークを使います。シミュでは似て見えたポリシーが
                フロアに降りたとたん大きく分岐する例をすでに何度も見ています。
                私たちのループで訓練したポリシーは、静かに壊れるのではなく、復元し適応するほうを選びました。
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. 結論</h2>
              <ChapterGraphic kind="conclusion" />
              <p className="mt-3">
                世界は人の形をしています。タスクごとにロボット 1 台、建物ごとに
                形態 1 つをつくり続けることもできます。あるいは、すでに
                フィットしている形態をつくる。二本足、両手、人が行くところに行く身体。
              </p>
              <p className="mt-2">
                Humanoid After All。簡単だからではなく、私たちが働かせたい
                環境がすでにこの形のために設計されているから。RLWRLD は、
                ヒューマノイドがその世界で—日々、フロアで、何事もなく—
                学ぶループをつくっています。
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
