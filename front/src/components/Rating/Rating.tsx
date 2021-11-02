import React from "react";
import { Stars } from "./Stars";

type RatingProps = {
  color?: string;
  text: string;
  value: number;
};

export const Rating: React.FC<RatingProps> = ({
  color = "#f8e825",
  text,
  value,
}) => {
  return (
    <div className="rating">
      <Stars value={value} />
      <span>{text && text}</span>
    </div>
  );
};
