import React from "react";

type FontAwesomeIconProps = { className: string };
export const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({
  className,
}) => {
  return <i className={className}></i>;
};
