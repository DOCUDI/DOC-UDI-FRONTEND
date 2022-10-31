import { AuthTypes } from "../types";

//Vehicle Actions

export const signout = (data) => ({
  type: AuthTypes.SIGNOUT_REQUEST,
  payload: data,
});
