import axios from "axios";
 
const API = axios.create({
  // baseURL: "http://localhost:9077/api",
    baseURL: "https://node.encleadus.cloud/api",
});
 
export const getJobs = async () => {
  const response = await API.get("/jobs");
 
  return response.data;
};