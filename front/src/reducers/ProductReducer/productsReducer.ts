import { IState } from "../../store";
import {
  ProductListAction,
  ProductListTypes,
  ProductDetailsAction,
  ProductDetailsTypes,
} from "./interface";

export const productsListReducer = (
  state = { products: [] },
  action: ProductListAction
): IState => {
  switch (action.type) {
    case ProductListTypes.PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductListTypes.PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ProductListTypes.PRODUCTS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action: ProductDetailsAction
) => {
  switch (action.type) {
    case ProductDetailsTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ProductDetailsTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductDetailsTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
