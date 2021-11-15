import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductDetails } from '../actions/productsActions';
import { Link, useRouteMatch } from 'react-router-dom';
import { ProductDetails } from '../components/Product/ProductDetails';

type MatchParams = {
  id: string;
};

export const ProductScreen: React.FC = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<MatchParams>();
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
};
