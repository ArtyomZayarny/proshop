import { LinkContainer } from "react-router-bootstrap";

export default function LinkContainerWrapper({ to = "", children }) {
  return <LinkContainer to={to}>{children}</LinkContainer>;
}
