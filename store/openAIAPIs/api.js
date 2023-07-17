import axios from "axios";
import { OPENAI_APIS_TOKEN } from "react-native-dotenv";
const openAIAPIs = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_APIS_TOKEN}`
  }
});

function openaiapis_post_v1_edits_create(payload) {
  return openAIAPIs.post(`/v1/edits`, payload.data);
}

function openaiapis_get_v1_models_list(payload) {
  return openAIAPIs.get(`/v1/models`);
}

function openaiapis_get_v1_engines_list(payload) {
  return openAIAPIs.get(`/v1/engines`);
}

function openaiapis_post_v1_completions_create(payload) {
  return openAIAPIs.post(`/v1/completions`, payload.data);
}

function openaiapis_get_v1_models_model_read(payload) {
  return openAIAPIs.get(`/v1/models/${payload.model}`);
}

function openaiapis_post_v1_chat_completions_create(payload) {
  return openAIAPIs.post(`/v1/chat/completions`, payload.data);
}

function openaiapis_post_v1_images_generations_create(payload) {
  return openAIAPIs.post(`/v1/images/generations`, payload.data);
}

function openaiapis_get_v1_engines_engine_id_read(payload) {
  return openAIAPIs.get(`/v1/engines/${payload.engine_id}`);
}

export const apiService = {
  openaiapis_post_v1_edits_create,
  openaiapis_get_v1_models_list,
  openaiapis_get_v1_engines_list,
  openaiapis_post_v1_completions_create,
  openaiapis_get_v1_models_model_read,
  openaiapis_post_v1_chat_completions_create,
  openaiapis_post_v1_images_generations_create,
  openaiapis_get_v1_engines_engine_id_read
};