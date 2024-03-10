import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  height?: "mobile" | "base";
  color?: "primary" | "secondary";
  children: ReactNode;
}
