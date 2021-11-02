import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "../Rating/Rating";

interface ProductTileProps {
  product: {
    _id: string;
    image: string;
    name: string;
    rating: number;
    numReviews: number;
    price: number;
  };
}
export const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <Card.Text as="div">
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
