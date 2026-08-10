import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "red" | "green" | "chrome";
  className?: string;
}

const variantStyles = {
  default: "bg-dark-border text-text-secondary",
  red: "bg-accent-red/20 text-accent-red-light border border-accent-red/30",
  green: "bg-whatsapp/15 text-whatsapp border border-whatsapp/30",
  chrome: "bg-chrome-dark/20 text-chrome-light border border-chrome-dark/30",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
