"use client";

import { cn } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
  primary: "py-3.5 bg-black rounded-full w-full text-white",
  secondary:
    "py-3.5 bg-white rounded-full w-full text-black border border-gray-200",
};

function Button({ children, className, variant, onClick }: IButtonProps) {
  return (
    <button
      className={cn(variants[variant], "cursor-pointer", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
