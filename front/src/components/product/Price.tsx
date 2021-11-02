import React from "react";
import { Col, Row } from "react-bootstrap";

type PriceProps = { price: number };

export const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <Row>
      <Col>Price:</Col>
      <Col>
        <strong>${price}</strong>
      </Col>
    </Row>
  );
};
