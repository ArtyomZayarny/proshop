import React from "react";
import { Alert } from "react-bootstrap";

interface messageProps {
  variant?: string;
  children: string;
}
export const Message: React.FC = ({
  variant = "info",
  children,
}: messageProps) => {
  return <Alert variant={variant}>{children}</Alert>;
};
