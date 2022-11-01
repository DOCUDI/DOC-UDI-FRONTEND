import { AuthTypes } from "../types";

const initialState = {
  success: false,
  upAppointments:[]
};

const AppointmentReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
  case AuthTypes.APPOINTMENT_SUCCESS:
    return {
      ...state,
      success: action.data.success,
      upAppointments: action.data.upAppointments,
    };
  case AuthTypes.APPOINTMENT_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default AppointmentReducer;
