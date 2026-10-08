import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-tight transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-500 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_4px_16px_rgba(99,102,241,0.25)] hover:bg-indigo-600 hover:-translate-y-px active:translate-y-0",
        secondary:
          "border border-border bg-card text-slate-800 dark:text-slate-100 hover:bg-muted hover:-translate-y-px active:translate-y-0",
        ghost:
          "text-slate-600 dark:text-slate-400 hover:bg-muted hover:text-slate-900 dark:hover:text-slate-100",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const compClasses = cn(
    buttonVariants({
      variant,
      size,
    }),
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={compClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {props.children}
      </a>
    );
  }

  return <button className={compClasses} {...props} />;
}
