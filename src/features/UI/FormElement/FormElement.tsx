import styled from "./FormElement.module.css";
import { ReactNode } from "react";

type FormElementProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export const FormElement = ({ id, label, children }: FormElementProps) => {
  return (
    <div className={styled["form-element"]}>
      <label htmlFor={id} className={styled["form-element__span"]}>
        {label}
      </label>
      {children}
    </div>
  );
};
