import React from "react";
import PropTypes from "prop-types";
import { Col, Image } from "react-bootstrap";

export default function ProductImage({ src, name }) {
  return (
    <Col md={6}>
      <Image src={src} alt={name} fluid />
    </Col>
  );
}

ProductImage.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
