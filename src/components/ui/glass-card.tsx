import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export function GlassCard({ children, className, hover = false, style }: GlassCardProps) {
  return (
    <div 
      style={style}
      className={cn(
        "glass rounded-2xl p-6",
        hover && "transition-all duration-300 hover:shadow-elevated hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}