import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

export default function StockStatus({ countInStock }) {
  return (
    <Row>
      <Col>Status:</Col>
      <Col>{countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
    </Row>
  );
}

StockStatus.propTypes = {
  countInStock: PropTypes.number,
};
