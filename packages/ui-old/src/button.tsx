"use client";

import { ReactNode } from "react";
import { Button as NewBtn } from "../components/ui/button";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <NewBtn variant={"outline"}>
      <div className="text-red-600"></div>
      <p className="text-right"></p>
    </NewBtn>
  );
};
