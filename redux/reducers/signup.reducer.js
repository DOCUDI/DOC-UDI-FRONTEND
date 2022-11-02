import { AuthTypes } from "../types";

const initialState = {
  _id: "",
  name: "",
  email: "",
  password: "",
  clinic_address: "",
  specialization: "",
  city: "",
  time_slots: [],
  consultation_fee: "",
  working_days: [],
  success: false,
  usedPassword : ""
};

const SignupReducer = (state = initialState, action) => {
  // console.log("hihhhhhhhhh",action);
  switch (action.type) {
  case AuthTypes.SIGNUP_SUCCESS:
    return {
      ...state,
      _id: action.data.user._id,
      name: action.data.user.name,
      email: action.data.user.email,
      password: action.data.user.password,
      clinic_address: action.data.user.clinic_address,
      specialization: action.data.user.specialization,
      city: action.data.user.city,
      time_slots: action.data.user.time_slots,
      consultation_fee: action.data.user.consultation_fee,
      working_days: action.data.user.working_days,
      success: action.data.success,
      usedPassword: action.data.password
    };
  case AuthTypes.SIGNUP_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default SignupReducer;
