import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-100 border border-gray-700",
    outline: "bg-transparent border border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-900/50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
         "w-full rounded-md bg-[#22d3ee] px-4 py-2 text-sm font-semibold text-[#020617] transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95",
         className
      )}
      {...props}
    />
  );
}