import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../actions/productsActions";
import axios from "axios";
import ProductTile from "../components/product/ProductTile";
import { Col, Row } from "react-bootstrap";

function getProducts() {
  axios.get(`/api/products`);
}
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
  return (
    <div>
      Home screen
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={6} lg={4} xl={3}>
            <ProductTile product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
