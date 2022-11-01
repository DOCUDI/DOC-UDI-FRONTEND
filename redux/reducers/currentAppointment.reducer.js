import { AuthTypes } from "../types";

const initialState = {
  success: false,
  upAppointments:[]
};

const CurrentAppointmentReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
  case AuthTypes.CURRENTAPPOINTMENT_SUCCESS:
    return {
      ...state,
      success: action.data.success,
      upAppointments: action.data.upAppointments,
    };
  case AuthTypes.CURRENTAPPOINTMENT_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default CurrentAppointmentReducer;
