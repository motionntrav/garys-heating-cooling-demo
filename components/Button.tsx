import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button"
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-100 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white hover:bg-brand-700"
      : "bg-white text-ink border border-border hover:bg-stonebg hover:text-brand-700";

  if (href) {
    const isHash = href.startsWith("#");
    return (
      <Link
        href={href}
        scroll={!isHash}
        className={`${base} ${styles} ${className}`}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
