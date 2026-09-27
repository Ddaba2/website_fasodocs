import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-sm border border-transparent",
  secondary:
    "bg-ink text-white hover:bg-ink/90 border border-transparent",
  ghost:
    "bg-transparent text-ink hover:bg-surface-muted border border-transparent",
  outline:
    "bg-transparent text-ink border border-border-strong hover:border-brand-green hover:text-brand-green",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    iconLeft,
    iconRight,
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200",
    "disabled:opacity-50 disabled:pointer-events-none",
    "min-w-0",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {content}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton & {
    href?: undefined;
  };
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
