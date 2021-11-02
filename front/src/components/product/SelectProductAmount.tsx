import React from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";

type SelectProductAmountProps = {
  availableCountInStock: number;
  setAmount: (value: number) => void;
  amount: number;
};

export const SelectProductAmount: React.FC<SelectProductAmountProps> = ({
  availableCountInStock,
  setAmount,
  amount,
}) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col>Qty</Col>
        <Col>
          <Form.Control
            as="select"
            value={amount}
            onChange={(e) => {
              setAmount(parseInt(e.target.value));
            }}
          >
            {[...Array(availableCountInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
