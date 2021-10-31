import React from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";

type SelectProductAmountProps = {
  availableCountInStock: number;
  setAmount: (value: string) => void;
  amount: number;
};

export const SelectProductAmount: React.FC = ({
  availableCountInStock,
  setAmount,
  amount,
}: SelectProductAmountProps) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col>Qty</Col>
        <Col>
          <Form.Control
            as="select"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
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
