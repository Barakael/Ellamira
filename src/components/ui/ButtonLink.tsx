import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  crimson: "bg-crimson text-white hover:bg-[#b91524]",
  navy: "bg-navy text-paper hover:bg-navy-ink",
  ghost: "border border-navy/20 text-navy hover:border-navy",
  "ghost-light": "border border-white/40 text-paper hover:border-white",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "crimson",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center px-5 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]} ${className}`;
  const external =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
