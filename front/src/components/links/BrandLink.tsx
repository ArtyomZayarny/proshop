import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";

interface BrandLinkProps {
  linkContent: String;
  to: String;
}

export default function BrandLink({ linkContent, to }: BrandLinkProps) {
  return (
    <LinkContainer to={`/${to}`}>
      <Navbar.Brand>{linkContent}</Navbar.Brand>
    </LinkContainer>
  );
}