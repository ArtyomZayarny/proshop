import React, { useState } from "react";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../Loader/loader";
import Message from "../Message/message";
import Price from "./Price";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import SelectProductAmount from "./SelectProductAmount";
import StockStatus from "./StockStatus";

export default function ProductDetails({ match, history }) {
  const [qty, setQty] = useState("1");
  const addToCartHandler = () => {
    console.log("add to cart");
    // history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <ProductImage src={product.image} name={product.name} />
            <ProductDescription
              name={product.name}
              rating={product.rating}
              numReviews={product.numReviews}
              price={product.price}
              description={product.description}
            />
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Price price={product.price} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <StockStatus countInStock={product.countInStock} />
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <SelectProductAmount
                      availableCountInStock={product.countInStock}
                      amount={qty}
                      setAmount={setQty}
                    />
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      style={{ width: "100%" }}
                      disabled={product.countInStock === 0}
                      variant="primary"
                      block
                    >
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    {/* <Rating value={review.rating} /> */}
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a customer Revies</h2>
                  {/* {errorProdutReview && (
              <Message variant="danger">{errorProdutReview}</Message>
            )} */}
                  {/* {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    row="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            )} */}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
