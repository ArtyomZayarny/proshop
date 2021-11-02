import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <LinkContainer to={to}>
      <Nav.Link>{children}</Nav.Link>
    </LinkContainer>
  );
};
