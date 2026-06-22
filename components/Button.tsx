import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "cta";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-[rgb(var(--brand-from))] via-[rgb(var(--brand-via))] to-[rgb(var(--brand-to))] shadow-[0_18px_40px_rgba(14,165,233,0.28)] hover:brightness-105 hover:saturate-110 hover:scale-[1.02] active:brightness-95 active:scale-100",
  cta:
    "relative overflow-hidden text-white bg-cta shadow-[0_12px_32px_rgba(249,115,22,0.35)] hover:bg-orange-600 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(249,115,22,0.45)] active:scale-100",
  secondary:
    "bg-card text-fg hover:bg-card/80 border border-border/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:scale-[1.01]",
  ghost: "bg-transparent text-fg hover:bg-card border border-border/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition duration-interactive ease-interactive cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition duration-interactive ease-interactive cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}


