import axios from "axios";
import { url } from "../config/index";
export async function getData() {
  try {
    const result = await axios.get(`${url}/all`);
    // console.log(result.data);
    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
        text: {
          postcode: 3026,
          population: 72,
          active: 0,
          cases: 101,
          rate: 0,
          new: 0,
          band: 0,
          data_date: "04/01/2021",
          file_processed_date: "05/01/2021",
        },
      };
    }
  } catch (error) {
    return { success: false, error };
  }
}
