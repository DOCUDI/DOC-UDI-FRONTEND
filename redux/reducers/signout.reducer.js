import { AuthTypes } from "../types";

const initialState = {
  name: "",
  email: "",
  password: "",
  clinic_address: "",
  specialization: "",
  city: "",
  time_slots: [
    {
      startTime: "",
      endTime: "",
    },
    {
      startTime: "",
      endTime: "",
    },
  ],
  consultation_fee: "",
  working_days: [],
  success: false,
};


const SignoutReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
  case AuthTypes.SIGNOUT_SUCCESS:
    return {
      ...state,
      success: true,
    };
  case AuthTypes.SIGNOUT_ERROR:
    return {
      ...state,
      success: false,
    };
  default:
    return state;
  }
};

export default SignoutReducer;
