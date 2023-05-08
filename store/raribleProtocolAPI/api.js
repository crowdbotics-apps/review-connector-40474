import axios from "axios";
const raribleProtocolAPI = axios.create({
  baseURL: "https://api.rarible.org",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function raribleprotocolapi_get_v01_items_itemId_list(payload) {
  return raribleProtocolAPI.get(`/v0.1/items/itemId`);
}

function raribleprotocolapi_get_v01_currencies_all_list(payload) {
  return raribleProtocolAPI.get(`/v0.1/currencies/all`);
}

function raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete(payload) {
  return raribleProtocolAPI.delete(`/v0.1/items/itemId/resetMeta`);
}

export const apiService = {
  raribleprotocolapi_get_v01_items_itemId_list,
  raribleprotocolapi_get_v01_currencies_all_list,
  raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete
};