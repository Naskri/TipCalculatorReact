import { TipData } from "../TipCalculator";

const PERCENTAGE = 0.01;

export const transformData = (data: TipData) => {
  const bill = Number(data.bill);
  const tip = Number(data.tip);
  const people = Number(data.people);

  return { bill, tip, people };
};

export const isValidData = (data: TipData) => {
  const { bill, tip, people } = transformData(data);

  return bill && tip && people;
};

export const billCalculations = (data: TipData) => {
  const { bill, tip, people } = transformData(data);

  const tipCalculatedFromBill = bill * (tip * PERCENTAGE);
  const totalAmount = bill + tipCalculatedFromBill;
  const totalPerPerson = totalAmount / people;
  const tipPerPerson = tipCalculatedFromBill / people;

  return { totalPerPerson, tipPerPerson };
};
