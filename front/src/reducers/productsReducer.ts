import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productsConstants";
import { IState } from "../store";

enum ProductListTypes {
  PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST",
  PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS",
  PRODUCTS_LIST_FAIL = "PRODUCTS_LIST_FAIL",
}

interface ProductListRequestAction {
  type: ProductListTypes.PRODUCTS_LIST_REQUEST;
}
interface ProductListSuccessAction {
  type: ProductListTypes.PRODUCTS_LIST_SUCCESS;
  payload: any[];
}
interface ProductListFailAction {
  type: ProductListTypes.PRODUCTS_LIST_FAIL;
  payload: string;
}

type ProductListAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

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
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
