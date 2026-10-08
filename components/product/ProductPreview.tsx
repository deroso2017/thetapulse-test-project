import {
  BarChart3,
  ChevronDown,
  CircleDot,
  Droplets,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

const bars = [42, 58, 48, 70, 55, 76, 63, 82, 68, 91, 73, 88, 78, 96, 84, 100];

export function ProductPreview() {
  return (
    <div id="product" className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute -inset-10 rounded-[40px] bg-[var(--brand)]/8 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_64px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-dim)] text-[var(--brand)]">
              <CircleDot size={16} />
            </div>
            <div>
              <div className="text-[13px] font-semibold tracking-tight">
                ThetaPulse
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Market terminal
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-md bg-[var(--brand-dim)] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--brand-strong)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
            </span>
            LIVE
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* Price */}
          <div className="flex items-end justify-between">
            <div>
              <button className="mb-2 flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                THETA / USDT
                <ChevronDown size={12} />
              </button>
              <div className="font-mono text-3xl font-bold tracking-tight">
                $0.0842
              </div>
              <div className="mt-1 flex items-center gap-1 font-mono text-[11px] font-semibold text-[var(--brand-strong)]">
                <TrendingUp size={12} />
                +12.48% today
              </div>
            </div>

            <button className="rounded-lg border border-border p-2 text-muted-foreground transition hover:bg-muted">
              <MoreHorizontal size={15} />
            </button>
          </div>

          {/* Chart */}
          <div className="mt-6 flex h-40 items-end gap-[3px] border-b border-border pb-3">
            {bars.map((height, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <div
                  className="w-full rounded-sm bg-[var(--brand)]/50 transition hover:bg-[var(--brand)]"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="24h Volume" value="$2.84M" />
            <Stat label="Liquidity" value="$8.21M" />
            <Stat label="Trades" value="14.2K" className="hidden sm:block" />
          </div>

          {/* DEX */}
          <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-muted/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <BarChart3 size={14} className="text-muted-foreground" />
              <span className="text-[13px] font-medium">ThetaSwap</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[var(--brand-strong)]">
              <Droplets size={13} />
              $4.7M liquidity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatProps {
  label: string;
  value: string;
  className?: string;
}

function Stat({ label, value, className = "" }: StatProps) {
  return (
    <div className={className}>
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-mono text-sm font-bold">{value}</div>
    </div>
  );
}
