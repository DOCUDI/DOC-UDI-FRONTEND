import Axios from "axios";

import { BASE_API_URL } from "./constants";
// { headers: {"Authorization" : `Bearer ${token}`} }
class AuthService {
  async signout(item) {
    const data = {
      email: item.email,
    };
    // const config = {};
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/doc/sign-out?type=admin`,
        data,
        {
          headers: {
            Authorization: `JWT ${item.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }
}
export default AuthService;
