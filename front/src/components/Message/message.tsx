import React from "react";
import { Alert } from "react-bootstrap";

type messageProps = {
  variant?: string;
  children: string | ReactNode;
};
export const Message: React.FC<messageProps> = ({
  variant = "info",
  children,
}) => {
  return <Alert variant={variant}>{children}</Alert>;
};
