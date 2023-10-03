import { FormEvent, ChangeEvent } from "react";
import { FormElement } from "../../UI/FormElement/FormElement";
import { Input } from "../../UI/Input/Input";
import { Tips } from "../../UI/Tips/Tips";
import styled from "./TipCalculatorForm.module.css";
import { TipData } from "../TipCalculator";

type TipCalculatorFormProps = {
  data: TipData;
  setNewData: (name: string, value: string) => void;
};

export const TipCalculatorForm = ({
  data,
  setNewData,
}: TipCalculatorFormProps) => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const target = ev.target;

    setNewData(target.name, target.value);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <FormElement label="Bill" id="bill">
        <Input
          id="bill"
          name="bill"
          iconPath="images/icon-dollar.svg"
          type="text"
          value={data.bill}
          onChange={handleChange}
        />
      </FormElement>

      <FormElement label="Select Tip %" id="tip">
        <Tips onChange={handleChange}>
          <Input
            id="tip"
            name="tip"
            placeholder="Custom"
            type="number"
            modifier="custom"
            min="1"
            max="30"
            onChange={handleChange}
          />
        </Tips>
      </FormElement>

      <FormElement label="Number of People" id="people">
        <Input
          id="people"
          name="people"
          iconPath="images/icon-person.svg"
          type="text"
          value={data.people}
          onChange={handleChange}
        />
      </FormElement>
    </form>
  );
};
