import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// combineReducers is used to build the global state object from
// a combination of all the other reducers
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
