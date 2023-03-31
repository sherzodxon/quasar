import { Axios } from "../boot/axios";

const getData = async (url) => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url, data) => {
  try {
    const response = await Axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editData = async (url, data) => {
  try {
    const response = await Axios.put(url, data);
    return response.data;
  } catch (error) {
   console.log(error);
  }
};

const deleteData = async (url) => {
  try {
    const response = await Axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { getData, postData, editData, deleteData };
