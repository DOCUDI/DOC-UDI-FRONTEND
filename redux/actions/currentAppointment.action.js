import { AuthTypes } from "../types";

//Vehicle Actions

export const currentAppointment = (data) => ({
  type: AuthTypes.CURRENTAPPOINTMENT_REQUEST,
  payload: data,
});

export const currentAppointmentError = () => ({
  type: AuthTypes.CURRENTAPPOINTMENT_ERROR
})