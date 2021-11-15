import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducer,
  productsListReducer,
} from './reducers/ProductReducer/productsReducer';
import { IProduct } from './interfaces';

export interface RootState {
  productDetails: {
    loading: boolean;
    error: string;
    product: IProduct;
  };
}

const reducers = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [thunk];
export interface IState {
  loading?: boolean;
  error?: string;
  cart?: any[];
  products?: any[];
  productDetails?: any;
  productsList?: any;
}
const inititalState: IState = { cart: [] };
const store = createStore(
  reducers,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
