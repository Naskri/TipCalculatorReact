import { Button } from "../../UI/Button/Button";
import { Total } from "../../UI/Total/Total";
import { TipData } from "../TipCalculator";
import styled from "./TipCalculatorSummary.module.css";
import { billCalculations, isValidData } from "./helpers";

type TipCalculatorSummaryProps = {
  data: TipData;
  resetData: () => void;
};

export const TipCalculatorSummary = ({
  data,
  resetData,
}: TipCalculatorSummaryProps) => {
  const isValid = isValidData(data);
  const { tipPerPerson, totalPerPerson } = billCalculations(data);

  return (
    <div className={styled.summary}>
      <Total title="Tip amount" data={isValid ? tipPerPerson : 0} />
      <Total title="Total" data={isValid ? totalPerPerson : 0} />
      <Button modifier="reset" onClick={resetData}>
        Reset
      </Button>
    </div>
  );
};
