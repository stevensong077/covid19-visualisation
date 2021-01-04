import axios from "axios";
export async function getData() {
  try {
    const result = await axios.get("http://192.168.0.125:3000/all");
    if (result.status === 200) {
      return {
        success: true,
        data: result.data,
        testJSON: {
          postcode: 3111,
          population: 12348,
          active: 0,
          cases: 17,
          rate: 0,
          new: 0,
          band: 0,
          data_date: "03/01/2021",
          file_processed_date: "04/01/2021",
          __v: 0,
        },
      };
    }
  } catch (error) {
    return { success: false, error };
  }
}
