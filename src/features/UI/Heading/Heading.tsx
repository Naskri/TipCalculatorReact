import styled from "./Heading.module.css";

export const Heading = () => {
  return (
    <h1 className={styled.heading}>
      Spli<span className={styled.heading__span}>tter</span>
    </h1>
  );
};
