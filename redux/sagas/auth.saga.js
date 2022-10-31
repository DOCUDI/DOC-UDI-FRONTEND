import { put, call, takeLatest, all } from "redux-saga/effects";
import { SignupService, LoginService, SignoutService } from "../../services";
// import { Login } from '../../services/auth.service';
import { AuthTypes } from "../types";

const signupService = new SignupService();
const loginService = new LoginService();
const signoutService = new SignoutService();
//Vehicle Sagas
export function* signup(action) {
  console.log("in signup");
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
  console.log("in signout");
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

export default function* allSaga() {
  yield all([
    //Vehicle
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNOUT_REQUEST, signout),
  ]);
}
