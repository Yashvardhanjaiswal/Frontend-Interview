import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-slate-700 bg-[#020617]/70 px-4 py-3 text-slate-100",
        "placeholder:text-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-transparent",
        "transition-all duration-200 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
