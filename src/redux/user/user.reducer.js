import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// Using es6 default value parameter to ensure currentState
// is never undefined if reducer is called without state param
const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

export default userReducer;
