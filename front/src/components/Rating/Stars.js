import React from "react";
import { getArrRating } from "./helpers";

export default function Stars({ value, color }) {
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

Stars.defaultProps = {
  color: "#f8e825",
};
