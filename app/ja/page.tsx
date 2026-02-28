import Image from "next/image";
import ChapterGraphic from "../components/ChapterGraphic";
import TitleInteraction from "../components/TitleInteraction";

export default function HomeJa() {
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
                2026年3月 · RLWRLD Lab
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
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-700 transition hover:ring-sky-400"
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
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-zinc-700 transition hover:ring-emerald-300"
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
                aria-current="page"
                className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 ring-1 ring-amber-300/80 transition hover:ring-amber-200"
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
            <section className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-5 py-4 text-sm text-rose-50 shadow-[0_0_40px_rgba(251,113,133,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">
                TL;DR
              </p>
              <p className="mt-2 text-rose-50/95">
                世界は人の身体に合わせてつくられています。車輪や単腕、タスク特化型ロボットを
                試してきましたが、ロボットが働く空間は結局のところ人間用の階段・ドア・棚です。
                本稿では、なぜヒューマノイド形態に賭けているのか、一つの身体で多くの場所を
                カバーするとはどういうことか、そしてその身体がシミュではなく現実世界で
                学ぶようにするために何が必要かを述べます。
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-5 py-4 text-sm text-zinc-300">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                目次
              </h2>
              <ol className="mt-3 space-y-1.5 text-xs sm:text-[13px]">
                <li>1. はじめに: なぜヒューマノイドか？ 世界は人の形</li>
                <li>2. 問題 · 複雑さ · コンタクト · 観測性 · セーフティ</li>
                <li>3. それでもヒューマノイドである理由 · 一身体・多くの空間 · 汎化</li>
                <li>4. 私たちのアプローチ · 実世界学習ループ · シミュからフロアへ</li>
                <li>5. 検証 · ライブヒューマノイドシステム · フロアに届くベンチマーク</li>
                <li>6. 結論 · Humanoid After All</li>
              </ol>
            </section>
          </aside>

          <article className="space-y-10 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
            <section>
              <h2 className="text-lg font-semibold text-zinc-50">
                1. はじめに: なぜヒューマノイドか？
              </h2>
              <ChapterGraphic kind="intro" />
              <p className="mt-3">
                階段。ドアノブ。目の高さの棚。私たちが住む世界は、車輪やレール上の
                単腕のために設計されたのではありません。二足で立ち、両手を使い、
                行く先を見て歩く身体のために設計されました。
              </p>
              <p className="mt-3">
                長いあいだロボティクスはその逆に振れていました。タスク特化の形態。
                ビン用のピッカー、継ぎ目用の溶接ロボット。制御は単純になり、認証も
                容易でした。しかし、一つのロボットに複数の空間を行き来させ、人と同じ
                ドアやエレベーターを使わせ、機械を再設計せずに新しいタスクを
                学ばせたいと思った瞬間、式が変わります。
              </p>
              <p className="mt-3">
                私たちはヒューマノイド形態に賭けています—
                <span className="font-medium text-sky-300">Humanoid After All</span>—世界が
                すでに人の形をしているからです。本稿では、その賭けがなぜ意味を持つか、
                何がそれを難しくするか、そしてヒューマノイドがシミュではなく現実世界で
                学ぶためのループを私たちがどうつくっているかを述べます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">2. 問題</h2>
              <ChapterGraphic kind="problem" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                複雑さ
              </h3>
              <p className="mt-2">
                ヒューマノイドは何十もの関節、両手、そしてバランス問題を抱えています。
                一歩ごとにアンダーアクチュエートされ、リーチとグリップが姿勢と結合します。
                多くの学習スタックは、より単純な形態—単腕や固定トルソーの四足—向けに
                つくられてきました。実世界で全身ヒューマノイド制御にスケールするとは、
                モデル化が難しくサンプリングコストの高い高次元・コンタクトリッチな
                ダイナミクスを扱うということです。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">コンタクト</h3>
              <p className="mt-2">
                ヒューマノイドは浮いていません。立ち、押し、把持します。コンタクトは
                副次的効果ではなく、仕事をする主な経路です。シミュではコンタクトは
                しばしば簡略化・正則化されます。フロアでは、一歩の誤りや滑った
                グリップが現実のコストを生みます。ロボットが転倒し、物体が壊れ、
                誰かがその経路にいる。ドメインランダムだけでは抜け出せず、実コンタクトから
                安全に学ぶループが必要です。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                観測性とセーフティ
              </h3>
              <p className="mt-2">
                全身状態が完璧に観測されることはありません。カメラは遮蔽し、
                ジョイントエンコーダはドリフトします。ヒューマノイドは人と同じ空間を
                共有するため、セーフティはオプションではありません。あらゆる実験が
                レビュー・リセット・リカバリというタックスを払います。多くの小さな
                有界実験を回し、問題が起きたら素早くロールバックするインフラが
                なければ、実世界のヒューマノイド学習は「月にデモ数本」で止まったままです。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">
                3. それでもヒューマノイドである理由
              </h2>
              <ChapterGraphic kind="why" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                一身体・多くの空間
              </h3>
              <p className="mt-2">
                倉庫、工場、家庭はロボットのために設計されていません。人のために
                設計されています。階段、ドア幅、カウンターの高さ、工具の取手—
                すべて二足で立ち両腕を使う身体を前提にしています。ヒューマノイドは
                建物ごとに新しいスロープや専用治具を必要としません。人が使う
                インフラをそのまま使います。
              </p>
              <p className="mt-2">
                それは統合コストを下げるだけではありません。一つのプラットフォームが
                形態を変えずにタスクや場所のあいだを移動できるということです。
                通路を歩くそのロボットが、はしごを上り、ドアを開け、棚から
                ピックできます。一つの身体で多くの場所をカバーするのです。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">汎化</h3>
              <p className="mt-2">
                タスク特化ロボットは一つのこと、一つの文脈で優れます。
                ヒューマノイドはつくり込み・チューニングが難しい代わりに、
                環境とタスクにわたって汎化する形態というリターンがあります。
                簡単だと言っているのではありません。価値があると言っているのです。
                世界はすでにヒューマノイド向けにできており、そのなかで学べる
                機械をつくればいい。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">
                4. 私たちのアプローチ
              </h2>
              <ChapterGraphic kind="solution" />
              <p className="mt-3">
                RLWRLD はヒューマノイドがシミュではなく現実世界で学ぶための
                ループを構築しています。それは、ヒューマノイドポリシーが訓練・検証・
                シップされる継続実験レールであり、ソフトウェアと同様の規律—有界ラン、
                完全テレメトリ、高速ロールバック—で回します。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                実世界学習ループ
              </h3>
              <p className="mt-2">
                私たちはフロアをプログラム可能な環境として扱います。シナリオ
                （歩行、把持、運搬、リカバリ）はグラフで定義され、すべての
                ジョイント・センサー・セーフティイベントがログされ、実験は
                クラスタにジョブを投げるようにヒューマノイドハードウェアに
                スケジュールされます。「このポリシーをデプロイして祈ろう」ではなく、
                多くの小さな有界実験を回し、実コンタクトと実失敗から学びます。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                シミュからフロアへ
              </h3>
              <p className="mt-2">
                シミュは依然としてサンプルを大量に消費する訓練の大半を担います。
                しかしヒューマノイドの sim-to-real ギャップは厳しい。バランス、
                コンタクト、部分観測が一気に効いてきます。だからループを閉じます。
                シミュで良い成績のポリシーは、ステージング環境の実ヒューマノイドで
                検証され、ガードレールとカナリアロールアウト付きでライブデプロイに
                昇格します。目標は、ヒューマノイドがロボットもチームも消耗させず、
                毎日現実世界から学ぶ定常状態です。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">5. 検証</h2>
              <ChapterGraphic kind="validation" />

              <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                ライブヒューマノイドシステム
              </h3>
              <p className="mt-2">
                実際のヒューマノイドデプロイでは、1 日あたりの実世界エピソード数、
                アイデアから実機結果までの実験ターンアラウンド、インシデントを
                理解し対策するまでの時間（incident half-life）を追跡します。
                私たちは完璧なデモ 1 本よりオペレーショナルテンポを重視します。
                少人数チームがヒューマノイドをフロアで燃え尽きずに学ばせ続けられるかが
                鍵です。
              </p>

              <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                フロアに届くベンチマーク
              </h3>
              <p className="mt-2">
                実ヒューマノイドタスク—ロコモーション、マニピュレーション、リカバリ—に
                明確に対応するベンチマークを使います。重要なのは実機で回し、
                バランス・コンタクト・セーフティをストレスするものです。シミュでは
                似て見えたポリシーがフロアに降りたとたん大きく分岐する例を
                すでに何度も見ています。私たちのループで訓練したポリシーは、
                静かに壊れるのではなく、復元し適応するほうを選びました。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-50">6. 結論</h2>
              <ChapterGraphic kind="conclusion" />
              <p className="mt-3">
                世界は人の形をしています。タスクごとにロボット 1 台、建物ごとに
                形態 1 つをつくり続けることもできます。あるいは、すでに
                フィットしている形態をつくる。二本足、両手、人が行くところに
                行く身体。
              </p>
              <p className="mt-2">
                Humanoid After All。簡単だからではなく、私たちが働かせたい
                環境がすでにこの形のために設計されているから。RLWRLD は、
                ヒューマノイドがその世界で—日々、フロアで、何事もなく—
                学ぶループをつくっています。
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

