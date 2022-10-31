import Axios from 'axios';

import { BASE_API_URL } from './constants';

class AuthService {
	async login(item) {
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/login`,
				item
			);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
export default AuthService;
