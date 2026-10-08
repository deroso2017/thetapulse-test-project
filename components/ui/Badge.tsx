import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-[var(--brand)]/25 bg-[var(--brand-dim)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--brand-strong)]",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
      {children}
    </span>
  );
}
