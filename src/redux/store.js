import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// Storing middlewares in an array means we can
// easily add more middleware into redux later
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//Create a persisted version of our store
export const persistor = persistStore(store);

const exportObj = {
  store,
  persistor,
};

export default exportObj;
