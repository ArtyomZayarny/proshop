import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function NavLink({ children, to }: NavLinkProps) {
  return (
    <LinkContainer to={to}>
      <Nav.Link>{children}</Nav.Link>
    </LinkContainer>
  );
}
