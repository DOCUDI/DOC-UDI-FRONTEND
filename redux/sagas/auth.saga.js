import { put, call, takeLatest, all } from "redux-saga/effects";
import {
  SignupService,
  LoginService,
  SignoutService,
  AppointmentService,
  CurrentAppointmentService,
  UploadPrescriptionService,
} from "../../services";
// import { Login } from '../../services/auth.service';
import { AuthTypes } from "../types";

const signupService = new SignupService();
const loginService = new LoginService();
const signoutService = new SignoutService();
const appointmentService = new AppointmentService();
const currentAppointmentService = new CurrentAppointmentService();
const uploadPrescriptionService = new UploadPrescriptionService();
//Vehicle Sagas
export function* signup(action) {
  // console.log("in signup");
  try {
    const res = yield call(signupService.signup, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.SIGNUP_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.SIGNUP_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.SIGNUP_ERROR, error });
  }
}
export function* login(action) {
  try {
    const res = yield call(loginService.login, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}
export function* signout(action) {
  // console.log("action", action.payload);
  try {
    const res = yield call(signoutService.signout, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.SIGNOUT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.SIGNOUT_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.SIGNOUT_ERROR, error });
  }
}

export function* getAppointments(action) {
  // console.log("action", action.payload);
  try {
    const res = yield call(appointmentService.getAppointments, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.APPOINTMENT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.APPOINTMENT_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.APPOINTMENT_ERROR, error });
  }
}

export function* getCurrentAppointment(action) {
  // console.log("action", action.payload);
  try {
    const res = yield call(
      currentAppointmentService.getCurrentAppointments,
      action.payload
    );
    if (res.error) {
      yield put({
        type: AuthTypes.CURRENTAPPOINTMENT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.CURRENTAPPOINTMENT_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.CURRENTAPPOINTMENT_ERROR, error });
  }
}

export function* uploadPrescription(action) {
  // console.log("action", action.payload);
  try {
    const res = yield call(
      uploadPrescriptionService.uploadPrescription,
      action.payload
    );
    if (res.error) {
      yield put({
        type: AuthTypes.CURRENTAPPOINTMENT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.UPLOADPRESCRIPTION_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.UPLOADPRESCRIPTION_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([
    //Vehicle
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNOUT_REQUEST, signout),
    takeLatest(AuthTypes.APPOINTMENT_REQUEST, getAppointments),
    takeLatest(AuthTypes.CURRENTAPPOINTMENT_REQUEST, getCurrentAppointment),
    takeLatest(AuthTypes.UPLOADPRESCRIPTION_REQUEST, uploadPrescription),
  ]);
}
