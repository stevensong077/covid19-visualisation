import axios from "axios";
const getData = async () => {
  try {
    const result = await axios.get("http://192.168.0.125:3000/all");
    console.log(result);
    if (result.status === 200) {
      console.log(result.data);
      return {
        success: true,
        data: result.data,
      };
    }
  } catch (error) {
    return { success: false, error };
  }
};

getData();
