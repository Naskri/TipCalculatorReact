import { FormElement } from "../../UI/FormElement/FormElement";
import { Input } from "../../UI/Input/Input";
import { Tips } from "../../UI/Tips/Tips";
import styled from "./TipCalculatorForm.module.css";

export const TipCalculatorForm = () => {
  return (
    <form className={styled.form}>
      <FormElement label="Bill" id="bill">
        <Input
          id="bill"
          iconPath="images/icon-dollar.svg"
          type="text"
          placeholder="0"
        />
      </FormElement>

      <FormElement label="Select Tip %" id="tip">
        <Tips />
      </FormElement>

      <FormElement label="Number of People" id="people">
        <Input
          id="people"
          iconPath="images/icon-person.svg"
          type="text"
          placeholder="0"
        />
      </FormElement>
    </form>
  );
};
