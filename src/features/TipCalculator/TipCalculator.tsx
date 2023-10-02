import styled from "./TipCalculator.module.css";
import { TipCalculatorForm } from "./TipCalculatorForm/TipCalculatorForm";
import { TipCalculatorSummary } from "./TipCalculatorSummary/TipCalculatorSummary";

export const TipCalculator = () => {
  return (
    <main className={styled["tip-calculator"]}>
      <TipCalculatorForm />
      <TipCalculatorSummary />
    </main>
  );
};
