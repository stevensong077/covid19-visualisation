import axios from "axios";
import {url} from "../config/index"
export async function getData() {
  try {
    const result = await axios.get(`${url}/all`);
    // console.log(result.data);
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
