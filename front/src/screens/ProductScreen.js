import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productsActions";
import { Link } from "react-router-dom";
import { ProductDetails } from "../components/product/ProductDetails";

export default function ProductScreen({ match, history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [match, dispatch]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <ProductDetails />
    </>
  );
}
