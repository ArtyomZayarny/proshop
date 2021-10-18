import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productsActions";

export default function ProductScreen({ match, history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, []);
  return (
    <div>
      <h2>Product screen</h2>
    </div>
  );
}
