/* Product List types and interface */
export enum ProductListTypes {
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

export type ProductListAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

/* Product Details types and interface */
export enum ProductDetailsTypes {
  PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
  PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
  PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL",
}

interface ProductDetailsRequestAction {
  type: ProductDetailsTypes.PRODUCT_DETAILS_REQUEST;
}

interface ProductDetailsSuccessAction {
  type: ProductDetailsTypes.PRODUCT_DETAILS_SUCCESS;
  payload: any[];
}

interface ProductDetailsFailAction {
  type: ProductDetailsTypes.PRODUCT_DETAILS_FAIL;
  payload: string;
}

export type ProductDetailsAction =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;
