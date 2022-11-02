import { AuthTypes } from "../types";

//Vehicle Actions

export const uploadPrescription = (data) => ({
  type: AuthTypes.UPLOADPRESCRIPTION_REQUEST,
  payload: data,
});

export const uploadPrescriptionError = () => ({
  type: AuthTypes.UPLOADPRESCRIPTION_ERROR
})