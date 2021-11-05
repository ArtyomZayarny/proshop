import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import { Stars } from "../Rating/Stars";
import { IProduct } from "../../interfaces";

export const ProductDescription: React.FC<IProduct> = ({
  name,
  rating,
  numReviews,
  price,
  description,
}) => {
  return (
    <Col md={3}>
      <ListGroup>
        <ListGroup.Item>
          <h3>{name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Stars value={rating} text={`${numReviews} reviews`} />
        </ListGroup.Item>
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Description: {description}</ListGroup.Item>
      </ListGroup>
    </Col>
  );
};