import React from "react";
import PropTypes from "prop-types";
import { Col, ListGroup } from "react-bootstrap";
import Stars from "../Rating/Stars";

export default function ProductDescription({
  name,
  rating,
  numReviews,
  price,
  description,
}) {
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
}

ProductDescription.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
};
