import { combineReducers } from "redux";

import LoginReducer from "./login.reducer";
import SignupReducer from "./signup.reducer";
import SignoutReducer from "./signout.reducer";
import AppointmentReducer from "./appointments.reducer";
import CurrentAppointmentReducer from "./currentAppointment.reducer";

const allReducers = {
  // Put all of the reducers here!
  signup: SignupReducer,
  login: LoginReducer,
  signout: SignoutReducer,
  getAppointment: AppointmentReducer,
  currentAppointment: CurrentAppointmentReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
