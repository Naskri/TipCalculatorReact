import { ChangeEvent } from "react";

import styled from "./Input.module.css";

type InputType = "text" | "radio" | "number";

type InputProps = {
  id: string;
  type: InputType;
  name: string;
  value?: string;
  placeholder?: string;
  iconPath?: string;
  modifier?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  id,
  name,
  iconPath,
  modifier,
  onChange,
  value,
  ...rest
}: InputProps) => {
  return (
    <div className={styled["input-container"]}>
      {iconPath && (
        <img
          src={iconPath}
          alt=""
          className={styled["input-container__icon"]}
        />
      )}
      <input
        className={`${styled["input-container__input"]} ${
          modifier && styled[`input-container__input--${modifier}`]
        }`}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        max={30}
        min={1}
        {...rest}
      />
      {modifier === "tip" && (
        <label className={styled.custom__label} htmlFor={id}>
          {value}%
        </label>
      )}
    </div>
  );
};
