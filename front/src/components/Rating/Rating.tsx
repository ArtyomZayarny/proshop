import React from "react";
import Stars from "./Stars";

type RatingProps = {
  color?: string;
  text: string;
  value: number;
};

export default function Rating({
  color = "#f8e825",
  text,
  value,
}: RatingProps) {
  return (
    <div className="rating">
      <Stars value={value} />
      <span>{text && text}</span>
    </div>
  );
}
