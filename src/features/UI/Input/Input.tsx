import styled from "./Input.module.css";

type InputType = "text" | "number";

type InputProps = {
  id: string;
  type: InputType;
  placeholder: string;
  iconPath?: string;
  modifier?: string;
};

export const Input = ({ id, iconPath, modifier, ...rest }: InputProps) => {
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
        name={id}
        id={id}
        {...rest}
      />
    </div>
  );
};
