import { ArrowUpRight, CircleDollarSign } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand Logo & Name */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand,#6366f1)] text-white shadow-[0_0_18px_rgba(99,102,241,0.45)] transition-transform duration-200 group-hover:scale-105">
            <CircleDollarSign size={20} />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            ThetaPulse
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          <a
            href="#features"
            className="relative rounded-xl px-4 py-2.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#product"
            className="relative rounded-xl px-4 py-2.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground"
          >
            Platform
          </a>
          <a
            href="#contact"
            className="relative rounded-xl px-4 py-2.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="flex items-center gap-3.5">
          <ThemeToggle />
          <a
            href="#product"
            className="hidden h-11 items-center gap-2 rounded-xl bg-(--brand,#6366f1) px-5 text-sm font-semibold text-white shadow-[0_4px_22px_rgba(99,102,241,0.35)] transition-all duration-200 hover:bg-[var(--brand-hover,#4f46e5)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 sm:flex"
          >
            Launch platform
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
