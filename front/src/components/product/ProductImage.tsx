import React from "react";
import { Col, Image } from "react-bootstrap";

type ProductImageProps = {
  src: string;
  name: string;
};

export const ProductImage: React.FC<ProductImageProps> = ({ src, name }) => {
  return (
    <Col md={6}>
      <Image src={src} alt={name} fluid />
    </Col>
  );
};
