import { Button } from "../../UI/Button/Button";
import { Total } from "../../UI/Total/Total";
import styled from "./TipCalculatorSummary.module.css";

export const TipCalculatorSummary = () => {
  return (
    <div className={styled.summary}>
      <Total title="Tip amount" data={0} />
      <Total title="Total" data={0} />
      <Button modifier="reset">Reset</Button>
    </div>
  );
};
