import React from "react";
import { Col, Row } from "react-bootstrap";

type PriceProps = { price: number };

export const Price: React.FC = ({ price }: PriceProps) => {
  return (
    <Row>
      <Col>Price:</Col>
      <Col>
        <strong>${price}</strong>
      </Col>
    </Row>
  );
};
