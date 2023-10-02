import styled from "./Button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  modifier?: string;
};

export const Button = ({ children, modifier }: ButtonProps) => {
  return (
    <button
      className={`${styled.btn} ${modifier && styled[`btn--${modifier}`]}`}
    >
      {children}
    </button>
  );
};
