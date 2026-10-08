import { CircleDollarSign, Mail, X, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-slate-200 bg-slate-50 dark:border-white/6 dark:bg-[#060910]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 py-10 sm:flex-row sm:items-center">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                <CircleDollarSign size={15} />
              </div>
              <span className="text-sm font-bold tracking-tight">
                ThetaPulse
              </span>
            </a>
            <p className="max-w-xs text-[13px] leading-5 text-slate-500 dark:text-slate-400">
              Real-time DEX analytics for the Theta blockchain.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start gap-4 sm:items-end">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400"
              >
                <X size={13} />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400"
              >
                <GitBranch size={13} />
              </a>
              <a
                href="mailto:contact@thetapulse.dev"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400"
              >
                <Mail size={13} />
              </a>
            </div>

            <p className="text-[13px] text-slate-500 dark:text-slate-400">
              contact@thetapulse.dev
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-5 dark:border-white/6 sm:flex-row">
          <p className="font-mono text-[11px] text-slate-400 dark:text-slate-600">
            © 2026 ThetaPulse. Fictional product for demonstration.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-slate-400 dark:text-slate-600">
            <a
              href="#"
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-400"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-400"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
