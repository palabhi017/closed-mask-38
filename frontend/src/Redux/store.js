
import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as productReducer } from "./Products/product.reducer";
import { reducer as Auth } from "./Auth/auth.reducer";
const rootReducer = combineReducers({productReducer, Auth });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

