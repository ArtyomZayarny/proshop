import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";

interface BrandLinkProps {
  linkContent: string;
  to: string;
}

export const BrandLink: React.FC<BrandLinkProps> = ({ linkContent, to }) => {
  return (
    <LinkContainer to={to}>
      <Navbar.Brand>{linkContent}</Navbar.Brand>
    </LinkContainer>
  );
};
