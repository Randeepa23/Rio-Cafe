import React from "react";

type AnimatedOrbsProps = {
  className?: string;
};

export function AnimatedOrbs({ className }: AnimatedOrbsProps) {
  return (
    <div className={className} aria-hidden>
      {/* Warm coral orb */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#FF8C42]/50 to-[#FF6B35]/40 blur-3xl animate-float"
        style={{ filter: "saturate(1.2)" }}
      />
      {/* Ocean blue orb */}
      <div
        className="absolute top-20 -right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#0A2342]/40 to-[#1B3A6F]/30 blur-3xl animate-float-slow"
      />
      {/* Emerald accent orb */}
      <div
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-[#06C167]/40 to-[#16A34A]/30 blur-3xl animate-float"
        style={{ animationDelay: "1.2s" }}
      />
    </div>
  );
}




