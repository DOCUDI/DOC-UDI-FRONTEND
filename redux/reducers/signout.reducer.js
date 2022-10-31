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
};


const SignoutReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
  case AuthTypes.SIGNOUT_SUCCESS:
    return {
      ...state,
    };
  case AuthTypes.SIGNOUT_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default SignoutReducer;
