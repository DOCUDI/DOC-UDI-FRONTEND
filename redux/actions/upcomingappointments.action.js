import { AuthTypes } from "../types";

//Vehicle Actions

export const getAppointments = (data) => ({
  type: AuthTypes.APPOINTMENT_REQUEST,
  payload: data,
});

export const appointmentError = () => ({
  type: AuthTypes.APPOINTMENT_ERROR
})