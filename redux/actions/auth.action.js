import { AuthTypes } from '../types';

//Vehicle Actions

export const login = (data) => ({
	type: AuthTypes.LOGIN_REQUEST,
	payload: data,
});
