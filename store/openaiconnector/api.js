import axios from "axios";
import { OPENAI_CONNECTOR_TOKEN } from "react-native-dotenv";
const openaiconnector = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_CONNECTOR_TOKEN}`
  }
});

function openaiconnector_post_v1_edits_create(payload) {
  return openaiconnector.post(`/v1/edits`, payload.data);
}

function openaiconnector_get_v1_models_read(payload) {
  return openaiconnector.get(`/v1/models`);
}

function openaiconnector_get_v1_engines_read(payload) {
  return openaiconnector.get(`/v1/engines`);
}

function openaiconnector_post_v1_completions_create(payload) {
  return openaiconnector.post(`/v1/completions`, payload.data);
}

function openaiconnector_get_v1_models_model_read(payload) {
  return openaiconnector.get(`/v1/models/${payload.model}`);
}

function openaiconnector_post_v1_chat_completions_create(payload) {
  return openaiconnector.post(`/v1/chat/completions`, payload.data);
}

function openaiconnector_post_v1_images_generations_create(payload) {
  return openaiconnector.post(`/v1/images/generations`, payload.data);
}

function openaiconnector_get_v1_engines_engine_id_read(payload) {
  return openaiconnector.get(`/v1/engines/${payload.engine_id}`);
}

export const apiService = {
  openaiconnector_post_v1_edits_create,
  openaiconnector_get_v1_models_read,
  openaiconnector_get_v1_engines_read,
  openaiconnector_post_v1_completions_create,
  openaiconnector_get_v1_models_model_read,
  openaiconnector_post_v1_chat_completions_create,
  openaiconnector_post_v1_images_generations_create,
  openaiconnector_get_v1_engines_engine_id_read
};