import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styled from "./Tips.module.css";

export const Tips = () => {
  return (
    <div className={styled.tips}>
      {tipsData.map((tip) => (
        <Button key={tip.id} modifier="tip">
          {tip.tip}
        </Button>
      ))}
      <Input id="tip" placeholder="Custom" type="text" modifier="custom" />
    </div>
  );
};

const tipsData = [
  {
    id: 1,
    tip: "5%",
  },
  {
    id: 2,
    tip: "10%",
  },
  {
    id: 3,
    tip: "15%",
  },
  {
    id: 4,
    tip: "25%",
  },
  {
    id: 5,
    tip: "50%",
  },
];
