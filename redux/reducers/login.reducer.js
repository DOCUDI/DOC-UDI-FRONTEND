import { AuthTypes } from "../types";

const initialState = {
  success: false,
  user: {},
  token: "",
};

const LoginReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
  case AuthTypes.LOGIN_SUCCESS:
    return {
      ...state,
      success: action.data.success,
      user: action.data.user,
      token: action.data.token,
    };
  case AuthTypes.LOGIN_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default LoginReducer;
