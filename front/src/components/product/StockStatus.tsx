import React from "react";
import { Col, Row } from "react-bootstrap";

type StockStatusProps = { countInStock?: number };

export const StockStatus: React.FC<StockStatusProps> = ({ countInStock }) => {
  return (
    <Row>
      <Col>Status:</Col>
      <Col>
        {countInStock && countInStock > 0 ? "In Stock" : "Out of Stock"}
      </Col>
    </Row>
  );
};
