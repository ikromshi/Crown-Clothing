import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null, 
  isLoading: false,
  error: null
};

export const userReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {...state, currentUser: payload};
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {...state, currentUser: null};
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {...state, error: payload};
    default:
      return state;
  };
};

/**
 * every single reducer receives every single action with redux, so the previous state
 * needs to be returned if the action type doesn't match
 */