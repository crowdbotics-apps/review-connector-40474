import axios from "axios"
import { VEETING_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const veetingIntegration = axios.create({
  baseURL: "https://rooms.veeting.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${VEETING_API_INTEGRATION_TOKEN}`
  }
})
function veetingintegration_post_meeting_close_create(payload) {
  return veetingIntegration.post(`/meeting/close`, payload.data)
}
function veetingintegration_post_api_v6_meeting_create(payload) {
  return veetingIntegration.post(`/api/v6/meeting`, payload.data)
}
export const apiService = {
  veetingintegration_post_meeting_close_create,
  veetingintegration_post_api_v6_meeting_create
}
