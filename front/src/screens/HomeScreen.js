import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList } from '../actions/productsActions';
import { ProductTile } from '../components/Product/ProductTile';
import { Col, Row } from 'react-bootstrap';
import { Loader } from '../components/Loader/Loader';
import { Message } from '../components/Message/message';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
  return (
    <div>
      <h2>Latest products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} lg={4} xl={3}>
              <ProductTile product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
