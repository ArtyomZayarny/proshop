import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

export default function Price({ price }) {
  return (
    <Row>
      <Col>Price:</Col>
      <Col>
        <strong>${price}</strong>
      </Col>
    </Row>
  );
}

Price.propTypes = {
  price: PropTypes.number,
};
