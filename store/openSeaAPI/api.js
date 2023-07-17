import axios from "axios";
const openSeaAPI = axios.create({
  baseURL: "https://testnets-api.opensea.io/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function openseaapi_get_orders_goerli_seaport_offers_list(payload) {
  return openSeaAPI.get(`/orders/goerli/seaport/offers`, {
    params: {
      limit: payload.limit
    }
  });
}

function openseaapi_get_orders_goerli_seaport_listings_list(payload) {
  return openSeaAPI.get(`/orders/goerli/seaport/listings`, {
    params: {
      limit: payload.limit
    }
  });
}

export const apiService = {
  openseaapi_get_orders_goerli_seaport_offers_list,
  openseaapi_get_orders_goerli_seaport_listings_list
};