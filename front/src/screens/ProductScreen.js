import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/productsActions";
import Loader from "../components/Loader/loader";
import Message from "../components/Message/message";
import { Link } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";

export default function ProductScreen({ match, history }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, []);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <ProductDetails />
      )}
    </>
  );
}
