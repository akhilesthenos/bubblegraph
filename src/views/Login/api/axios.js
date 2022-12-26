import axios from "axios";
export const baseUrl = process.env.REACT_APP_BASE_URL;

export default axios.create({
  baseURL: baseUrl,
});
