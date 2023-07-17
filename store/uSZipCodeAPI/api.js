import axios from "axios";
import { US_ZIP_CODE_API_SUPPORT_TOKEN } from "react-native-dotenv";
const uSZipCodeAPI = axios.create({
  baseURL: "https://us-zip-code-information.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${US_ZIP_CODE_API_SUPPORT_TOKEN}`
  }
});

function uszipcodeapi_get__read(payload) {
  return uSZipCodeAPI.get(`/`, {
    params: {
      zipcode: payload.zipcode
    }
  });
}

export const apiService = {
  uszipcodeapi_get__read
};