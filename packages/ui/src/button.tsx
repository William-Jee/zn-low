"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      style={{ background: "yellow1" }}
      onClick={() => alert(`new Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};