import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productsListReducer,
} from "./reducers/productsReducer";
import { IProduct } from "./interfaces";

export interface RootState {
  productDetails: {
    loading: boolean,
    error: string,
    product: IProduct,
  };
}

const reducers = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [thunk];
const inititalState = { cart: [] };
const store = createStore(
  reducers,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
