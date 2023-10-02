import styled from "./Wrapper.module.css";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styled.wrapper}>{children}</div>;
};
