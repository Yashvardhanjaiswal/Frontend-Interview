import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        // Base
        "w-full rounded-lg border border-slate-700 bg-[#020617]/70 px-4 py-3 text-slate-100",

        // Placeholder
        "placeholder:text-slate-500",

        // Focus / interaction
        "focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-transparent",

        // Animation / polish
        "transition-all duration-200 backdrop-blur-sm",

        className
      )}
      {...props}
    />
  );
}
