import axios from "axios";
const polygonioAPI = axios.create({
  baseURL: "https://api.polygon.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function polygonioapi_get_v1_marketstatus_now_list(payload) {
  return polygonioAPI.get(`/v1/marketstatus/now`, {
    params: {
      apiKey: payload.apiKey
    }
  });
}

function polygonioapi_get_v3_reference_exchanges_list(payload) {
  return polygonioAPI.get(`/v3/reference/exchanges`, {
    params: {
      asset_class: payload.asset_class,
      locale: payload.locale
    }
  });
}

function polygonioapi_get_vX_reference_financials_read(payload) {
  return polygonioAPI.get(`/vX/reference/financials`, {
    params: {
      apiKey: payload.apiKey
    }
  });
}

export const apiService = {
  polygonioapi_get_v1_marketstatus_now_list,
  polygonioapi_get_v3_reference_exchanges_list,
  polygonioapi_get_vX_reference_financials_read
};