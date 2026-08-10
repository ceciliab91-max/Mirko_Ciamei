import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-dark-card border border-dark-border rounded-2xl p-6
        transition-all duration-300 ease-out
        ${hover ? "hover:-translate-y-1 hover:border-dark-border-hover" : ""}
        ${glow ? "card-glow-hover" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
