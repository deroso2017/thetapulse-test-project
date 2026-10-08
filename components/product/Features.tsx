import { Bot, ChartNoAxesCombined, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    number: "01",
    title: "Real-time market data",
    description:
      "Track token prices, trading volume and liquidity with a focused interface designed for fast decisions.",
  },
  {
    icon: ChartNoAxesCombined,
    number: "02",
    title: "DEX intelligence",
    description:
      "Discover market activity across decentralized exchanges and understand where liquidity is moving.",
  },
  {
    icon: Bot,
    number: "03",
    title: "Smart trading tools",
    description:
      "Turn market signals into action with automation-ready tools for more efficient trading strategies.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-(--brand)">
            One clear view
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to understand Theta DeFi.
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Designed to remove noise and put the information that matters
            directly in front of traders and investors.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:shadow-[0_8px_32px_rgba(99,102,241,0.1)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-dim)] text-[var(--brand)]">
                    <Icon size={19} />
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-muted-foreground">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
