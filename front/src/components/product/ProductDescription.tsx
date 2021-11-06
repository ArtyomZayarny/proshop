import React from "react";
import { Col, ListGroup, Card, Button } from "react-bootstrap";
import { Stars } from "../Rating/Stars";
import { SelectProductAmount } from "./SelectProductAmount";
import { StockStatus } from "./StockStatus";

type ProductDescriptionProps = {
  name: string;
  rating: number;
  numReviews: number;
  price: number;
  description: string;
  countInStock: number;
  qty: number;
  setQty: (value: number) => void;
  addToCartHandler: () => void;
};
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  name,
  rating,
  numReviews,
  price,
  description,
  countInStock,
  qty,
  addToCartHandler,
  setQty,
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
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <StockStatus countInStock={countInStock} />
          </ListGroup.Item>
          {countInStock > 0 && (
            <SelectProductAmount
              availableCountInStock={countInStock}
              amount={qty}
              setAmount={setQty}
            />
          )}
          <ListGroup.Item>
            <Button
              onClick={addToCartHandler}
              style={{ width: "100%" }}
              disabled={countInStock === 0}
              variant="primary"
              block
            >
              Add to cart
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};
