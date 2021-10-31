import React from "react";
import { getArrRating } from "./helpers";

type StarsProps = {
  value: number;
  color?: string;
};
export default function Stars({ value, color = "#f8e825" }: StarsProps) {
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
}
