import { TipCalculator } from "../../features/TipCalculator/TipCalculator";
import { Heading } from "../../features/UI/Heading/Heading";
import { Wrapper } from "../../features/UI/Wrapper/Wrapper";
import styled from "./Root.module.css";

export const Root = () => {
  return (
    <div className={styled.root}>
      <Wrapper>
        <Heading />
        <TipCalculator />
      </Wrapper>
    </div>
  );
};
