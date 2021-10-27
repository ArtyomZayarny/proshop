import React from "react";
import PropTypes from "prop-types";
import { Col, Form, ListGroup, Row } from "react-bootstrap";

export default function SelectProductAmount({
  availableCountInStock,
  setAmount,
  amount,
}) {
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
}

SelectProductAmount.propTypes = {
  amount: PropTypes.number,
  setAmount: PropTypes.func,
  availableCountInStock: PropTypes.number,
};
