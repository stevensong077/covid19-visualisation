import axios from "axios";
import { url } from "../config/index";
export async function getData() {
  try {
    const result = await axios.get(`${url}/all`);
    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
      };
    }
  } catch (error) {
    return { success: false, error };
  }
}

export async function getlocation(postcode) {
  try {
    const result = await axios.post(`${url}/postcode`, { postcode: postcode });
    if (result.status === 200) {
      return { success: true, data: result.data };
    }
  } catch (error) {
    return { success: false, error };
  }
}
