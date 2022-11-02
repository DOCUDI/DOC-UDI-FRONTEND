import { combineReducers } from "redux";

import LoginReducer from "./login.reducer";
import SignupReducer from "./signup.reducer";
import SignoutReducer from "./signout.reducer";
import AppointmentReducer from "./appointments.reducer";
import CurrentAppointmentReducer from "./currentAppointment.reducer";
import UploadPrescriptionReducer from "./uploadprescription.reducer";

const allReducers = {
  // Put all of the reducers here!
  signup: SignupReducer,
  login: LoginReducer,
  signout: SignoutReducer,
  getAppointment: AppointmentReducer,
  currentAppointment: CurrentAppointmentReducer,
  uploadPrescription: UploadPrescriptionReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
