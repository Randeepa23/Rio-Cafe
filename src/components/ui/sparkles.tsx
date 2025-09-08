import React from "react";

type SparklesProps = {
  count?: number;
  className?: string;
};

export function Sparkles({ count = 20, className }: SparklesProps) {
  const items = Array.from({ length: count });
  return (
    <div className={className} aria-hidden>
      {items.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2; // 0-2s
        const duration = 2 + Math.random() * 2; // 2-4s
        const size = 3 + Math.random() * 3; // 3-6px
        const opacity = 0.6 + Math.random() * 0.4; // 0.6-1
        return (
          <span
            key={i}
            className="sparkle absolute rounded-full"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}




