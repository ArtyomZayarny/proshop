import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsListReducer } from "./reducers/productsReducer";

const reducers = combineReducers({
  productsList: productsListReducer,
});

const middleware = [thunk];
const inititalState = { cart: [] };
const store = createStore(
  reducers,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
