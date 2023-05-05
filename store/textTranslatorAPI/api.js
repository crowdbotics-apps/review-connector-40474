import axios from "axios"
import { TEXT_TRANSLATOR_API_PLUGIN_TOKEN } from "react-native-dotenv"
const textTranslatorAPI = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TEXT_TRANSLATOR_API_PLUGIN_TOKEN}`
  }
})
function texttranslatorapi_post_translate_create(payload) {
  return textTranslatorAPI.post(`/translate`, payload.data)
}
export const apiService = { texttranslatorapi_post_translate_create }
