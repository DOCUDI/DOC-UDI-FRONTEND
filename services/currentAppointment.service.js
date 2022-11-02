import Axios from "axios";

import { BASE_API_URL } from "./constants";

class AuthService {
  async getCurrentAppointments(item) {
    // console.log("item", item);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
    };
    const data = {
      docID: item,
    };
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/doc/start-appointment`,
        data,
        config
      );
      // console.log("res", response.data);
      return response.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }
}
export default AuthService;
