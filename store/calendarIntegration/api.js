import axios from "axios"
const calendarIntegration = axios.create({
  baseURL: "https://www.googleapis.com/calendar/v3",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function calendarintegration_get_users_me_calendarList_list(payload) {
  return calendarIntegration.get(`/users/me/calendarList`, {
    params: { access_token: payload.access_token }
  })
}
function calendarintegration_post_users_me_calendarList_create(payload) {
  return calendarIntegration.post(`/users/me/calendarList`, {
    params: { access_token: payload.access_token }
  })
}
function calendarintegration_delete_users_me_calendarList_calender_id_delete(
  payload
) {
  return calendarIntegration.delete(
    `/users/me/calendarList/${payload.calender_id}`
  )
}
export const apiService = {
  calendarintegration_get_users_me_calendarList_list,
  calendarintegration_post_users_me_calendarList_create,
  calendarintegration_delete_users_me_calendarList_calender_id_delete
}
