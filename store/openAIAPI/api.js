import axios from "axios"
import { OPENAI_APIS_TOKEN } from "react-native-dotenv"
const openAIAPI = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_APIS_TOKEN}`
  }
})
function openaiapi_post_v1_edits_create(payload) {
  return openAIAPI.post(`/v1/edits`, payload.data)
}
function openaiapi_get_v1_models_list(payload) {
  return openAIAPI.get(`/v1/models`)
}
function openaiapi_get_v1_engines_list(payload) {
  return openAIAPI.get(`/v1/engines`)
}
function openaiapi_post_v1_completions_create(payload) {
  return openAIAPI.post(`/v1/completions`, payload.data)
}
function openaiapi_get_v1_models_model_read(payload) {
  return openAIAPI.get(`/v1/models/${payload.model}`)
}
function openaiapi_post_v1_chat_completions_create(payload) {
  return openAIAPI.post(`/v1/chat/completions`, payload.data)
}
function openaiapi_post_v1_audio_translations_create(payload) {
  return openAIAPI.post(`/v1/audio/translations`, payload.data)
}
function openaiapi_post_v1_images_generations_create(payload) {
  return openAIAPI.post(`/v1/images/generations`, payload.data)
}
function openaiapi_get_v1_engines_engine_id_read(payload) {
  return openAIAPI.get(`/v1/engines/${payload.engine_id}`)
}
function openaiapi_post_v1_audio_transcriptions_create(payload) {
  return openAIAPI.post(`/v1/audio/transcriptions`, payload.data)
}
export const apiService = {
  openaiapi_post_v1_edits_create,
  openaiapi_get_v1_models_list,
  openaiapi_get_v1_engines_list,
  openaiapi_post_v1_completions_create,
  openaiapi_get_v1_models_model_read,
  openaiapi_post_v1_chat_completions_create,
  openaiapi_post_v1_audio_translations_create,
  openaiapi_post_v1_images_generations_create,
  openaiapi_get_v1_engines_engine_id_read,
  openaiapi_post_v1_audio_transcriptions_create
}
