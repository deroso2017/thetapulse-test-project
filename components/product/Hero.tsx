import * as React from "react";
import { ArrowRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductPreview } from "@/components/product/ProductPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-28">
        <div className="relative">
          <Badge>Built for the Theta ecosystem</Badge>

          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-[72px] lg:leading-none">
            See the market
            <span className="block bg-linear-to-r from-(--brand) to-(--brand-strong) bg-clip-text text-transparent">
              before it moves.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            ThetaPulse gives traders a clear, real-time view of token prices,
            liquidity and DEX activity across the Theta blockchain.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#product">
              Explore ThetaPulse
              <ArrowRight size={15} />
            </Button>

            <Button href="#features" variant="secondary">
              <Play size={13} />
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:gap-6">
            <span>Real-time data</span>
            <span className="h-1 w-1 rounded-full bg-[var(--brand)]/40" />
            <span>EVM compatible</span>
            <span className="h-1 w-1 rounded-full bg-[var(--brand)]/40" />
            <span>Built for traders</span>
          </div>
        </div>

        <div className="relative animate-float">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
