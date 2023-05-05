import axios from "axios"
const convertKitIntegration = axios.create({
  baseURL: "https://api.convertkit.com/v3",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function convertkitintegration_get_tags_read(payload) {
  return convertKitIntegration.get(`/tags`, {
    params: { api_key: payload.api_key }
  })
}
function convertkitintegration_post_tags_create(payload) {
  return convertKitIntegration.post(`/tags`, payload.data, {
    params: { api_key: payload.api_key }
  })
}
function convertkitintegration_post_tags_tag_id_subscribe_create(payload) {
  return convertKitIntegration.post(`/tags/tag_id/subscribe`, payload.data)
}
export const apiService = {
  convertkitintegration_get_tags_read,
  convertkitintegration_post_tags_create,
  convertkitintegration_post_tags_tag_id_subscribe_create
}
