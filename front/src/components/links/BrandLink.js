import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";

export default function BrandLink({ linkContent, to }) {
  return (
    <LinkContainer to={to}>
      <Navbar.Brand>{linkContent}</Navbar.Brand>
    </LinkContainer>
  );
}
