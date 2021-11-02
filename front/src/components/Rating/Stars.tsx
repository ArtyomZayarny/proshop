import React from "react";
import { getArrRating } from "./helpers";

type StarsProps = {
  value: number;
  color?: string;
  text?: string;
};
export const Stars: React.FC<StarsProps> = ({ value, color = "#f8e825" }) => {
  const arrRating = getArrRating(value);
  return (
    <>
      {arrRating.map((item, index) => (
        <span key={index}>
          <i
            style={{ color }}
            className={
              item
                ? Number.isInteger(item)
                  ? "fas fa-star"
                  : "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
    </>
  );
};
