import styled from "./Button.module.css";
import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
  children: ReactNode;
  modifier?: string;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, modifier, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styled.btn} ${modifier && styled[`btn--${modifier}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
