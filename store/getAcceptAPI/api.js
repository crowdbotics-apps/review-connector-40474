import axios from "axios";
import { GETACCEPT_API_SUPPORT_TOKEN } from "react-native-dotenv";
const getAcceptAPI = axios.create({
  baseURL: "https://api.getaccept.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${GETACCEPT_API_SUPPORT_TOKEN}`
  }
});

function getacceptapi_get_v1_documents_list(payload) {
  return getAcceptAPI.get(`/v1/documents`);
}

function getacceptapi_post_v1_documents_create(payload) {
  return getAcceptAPI.post(`/v1/documents`, payload.data);
}

function getacceptapi_delete_v1_documents_DOCUMENT_ID_delete(payload) {
  return getAcceptAPI.delete(`/v1/documents/DOCUMENT_ID`);
}

export const apiService = {
  getacceptapi_get_v1_documents_list,
  getacceptapi_post_v1_documents_create,
  getacceptapi_delete_v1_documents_DOCUMENT_ID_delete
};