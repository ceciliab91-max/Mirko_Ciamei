import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "emergency";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  pulse?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-red hover:bg-accent-red-light text-white border border-accent-red/50 hover:border-accent-red-light shadow-lg hover:shadow-accent-red-glow",
  secondary:
    "bg-dark-card hover:bg-dark-border text-text-primary border border-dark-border hover:border-chrome-dark",
  ghost:
    "bg-transparent hover:bg-dark-card text-text-secondary hover:text-text-primary border border-transparent",
  whatsapp:
    "bg-whatsapp/90 hover:bg-whatsapp text-white border border-whatsapp/50 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]",
  emergency:
    "bg-accent-red hover:bg-accent-red-light text-white border border-accent-red-light/50 animate-pulse-red font-bold",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  pulse,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none whitespace-nowrap";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    pulse ? "animate-pulse-red" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
