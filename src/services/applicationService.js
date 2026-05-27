import axios from "axios";
 
const API = axios.create({
  // baseURL: "http://localhost:9077/api",
  baseURL: "https://node.encleadus.cloud/api",
});
 
export const submitApplication = async (
  formData
) => {
  const response = await API.post(
    "/apply",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
 
  return response.data;
};