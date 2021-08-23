import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Get the localStorage object

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage, //Links to the import on line 3
  whitelist: ["cart"], //Array containing the string names of the reducers we want to persist
};

// combineReducers is used to build the global state object from
// a combination of all the other reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
