import styled from "./Total.module.css";

type TotalProps = {
  title: string;
  data: number;
};

export const Total = ({ title, data }: TotalProps) => {
  const formattedData = data.toFixed(2);

  return (
    <div className={styled.total}>
      <div className={styled.total__typography}>
        <strong className={styled.total__title}>{title}</strong>
        <span className={styled.total__per}>/ person</span>
      </div>
      <strong className={styled.total__value}>${formattedData}</strong>
    </div>
  );
};
