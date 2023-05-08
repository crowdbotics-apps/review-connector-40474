import axios from "axios";
import { BIONIC_READING_API_TOKEN } from "react-native-dotenv";
const bionicReadingAPI = axios.create({
  baseURL: "https://bionic-reading1.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${BIONIC_READING_API_TOKEN}`
  }
});

function bionicreadingapi_post_convert_create(payload) {
  return bionicReadingAPI.post(`/convert`, payload.data);
}

export const apiService = {
  bionicreadingapi_post_convert_create
};