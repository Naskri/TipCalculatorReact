import { useState } from "react";
import { TipCalculatorForm } from "./TipCalculatorForm/TipCalculatorForm";
import { TipCalculatorSummary } from "./TipCalculatorSummary/TipCalculatorSummary";
import styled from "./TipCalculator.module.css";

export type TipData = {
  bill: string;
  tip: string;
  people: string;
};

export const TipCalculator = () => {
  const [data, setData] = useState({
    bill: "0",
    tip: "0",
    people: "0",
  });

  const setNewData = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value.replace(/[a-zA-Z]/g, ""),
    }));
  };

  const resetData = () => {
    setData({
      bill: "0",
      tip: "0",
      people: "0",
    });
  };

  return (
    <main className={styled["tip-calculator"]}>
      <TipCalculatorForm data={data} setNewData={setNewData} />
      <TipCalculatorSummary data={data} resetData={resetData} />
    </main>
  );
};
