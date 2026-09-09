"use client";

import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
}

function Button({ children }: IButtonProps) {
  return <button className="py-3.5">{children}</button>;
}

export default Button;
