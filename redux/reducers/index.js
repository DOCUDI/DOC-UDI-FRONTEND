import { combineReducers } from "redux";

import LoginReducer from "./login.reducer";
import SignupReducer from "./signup.reducer";
import SignoutReducer from "./signout.reducer";

const allReducers = {
  // Put all of the reducers here!
  signup: SignupReducer,
  login: LoginReducer,
  signout: SignoutReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
