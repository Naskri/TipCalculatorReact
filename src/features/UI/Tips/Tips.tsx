import { ReactNode, ChangeEvent } from "react";
import styled from "./Tips.module.css";
import { Input } from "../Input/Input";

type TipsProps = {
  children: ReactNode;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export const Tips = ({ children, onChange }: TipsProps) => {
  return (
    <div className={styled.tips}>
      {tipsData.map((tip) => (
        <Input
          id={`custom-${String(tip.tip)}`}
          type="radio"
          key={tip.id}
          name="tip"
          modifier="tip"
          value={String(tip.tip)}
          onChange={onChange}
        />
      ))}
      {children}
    </div>
  );
};

const tipsData = [
  {
    id: 1,
    tip: 5,
  },
  {
    id: 2,
    tip: 10,
  },
  {
    id: 3,
    tip: 15,
  },
  {
    id: 4,
    tip: 25,
  },
  {
    id: 5,
    tip: 50,
  },
];
