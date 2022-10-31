import { AuthTypes } from "../types";

//Vehicle Actions

export const signup = (data) => ({
  type: AuthTypes.SIGNUP_REQUEST,
  payload: data,
});

export const signupError = () => ({
  type: AuthTypes.SIGNUP_ERROR
})