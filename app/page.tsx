import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  GitPullRequest,
  MonitorCheck,
  Sparkles,
} from "lucide-react"

type TaskStatus = "完了" | "進行中" | "次" | "未着手"

const stats = [
  { label: "参加者", value: "24", tone: "bg-sky-500" },
  { label: "進行", value: "18分", tone: "bg-amber-500" },
  { label: "確認済み", value: "3/5", tone: "bg-emerald-500" },
]

const tasks: Array<{
  title: string
  owner: string
  status: TaskStatus
  detail: string
}> = [
  {
    title: "DESIGN.mdを読む",
    owner: "Codex",
    status: "完了",
    detail: "画面の方針を先にそろえる",
  },
  {
    title: "管理画面を作る",
    owner: "Codex",
    status: "進行中",
    detail: "見た目の変化が分かるところまで",
  },
  {
    title: "in-app browserで見る",
    owner: "参加者",
    status: "次",
    detail: "重なり、余白、押しやすさを見る",
  },
  {
    title: "差分レビュー",
    owner: "Codex",
    status: "未着手",
    detail: "95点を超えるまで直す",
  },
]

const prompts = [
  "このリポジトリの目的を確認して",
  "DESIGN.mdの方針で小さな管理画面を作って",
  "in-app browserで表示確認して",
]

function StatusIcon({ status }: { status: TaskStatus }) {
  if (status === "完了") {
    return <CheckCircle2 className="size-4 text-emerald-600" />
  }

  if (status === "進行中") {
    return <CircleDot className="size-4 text-amber-600" />
  }

  return <CircleDot className="size-4 text-muted-foreground" />
}

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="size-3.5 text-amber-500" />
              Codex App hands-on
            </p>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              ハンズオン運営ダッシュボード
            </h1>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              今日はここから作ります。方針を読ませて、実装して、ブラウザで見て、差分まで確認する。その流れを30分で通します。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <MonitorCheck />
              表示確認
            </Button>
            <Button>
              差分を見る
              <ArrowRight />
            </Button>
          </div>
        </header>

        <section className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <span className={`size-2.5 rounded-full ${stat.tone}`} />
              </div>
              <p className="mt-3 font-mono text-3xl font-semibold tabular-nums">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <section className="rounded-lg border">
            <div className="flex flex-col gap-2 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-medium">今日の進行</h2>
                <p className="text-sm text-muted-foreground">
                  操作は右、状態は左。迷ったらこの表に戻ります。
                </p>
              </div>
              <Button variant="outline" size="sm" className="self-start">
                <GitPullRequest />
                レビューへ
              </Button>
            </div>
            <div className="divide-y">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_7rem_7rem]"
                >
                  <div className="flex min-w-0 gap-3">
                    <StatusIcon status={task.status} />
                    <div className="min-w-0">
                      <p className="font-medium">{task.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {task.detail}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground sm:text-right">
                    {task.owner}
                  </p>
                  <p className="text-sm font-medium sm:text-right">
                    {task.status}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <aside className="flex flex-col gap-4">
            <section className="rounded-lg border p-4">
              <h2 className="font-medium">貼るプロンプト</h2>
              <div className="mt-4 space-y-3">
                {prompts.map((prompt, index) => (
                  <div key={prompt} className="rounded-md bg-muted p-3">
                    <p className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </p>
                    <p className="mt-1 text-sm">{prompt}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border p-4">
              <h2 className="font-medium">レビュー基準</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                きれいに見えるかより、当日見せたときに迷わないかを見る。95点を超えたら止めます。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}
