import axios from "axios"
const tronGridAPI = axios.create({
  baseURL: "https://api.shasta.trongrid.io",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function trongridapi_post_wallet_getaccount_create(payload) {
  return tronGridAPI.post(`/wallet/getaccount`, payload.data)
}
function trongridapi_post_wallet_createaccount_create(payload) {
  return tronGridAPI.post(`/wallet/createaccount`, payload.data)
}
function trongridapi_post_wallet_updateaccount_create(payload) {
  return tronGridAPI.post(`/wallet/updateaccount`, payload.data)
}
export const apiService = {
  trongridapi_post_wallet_getaccount_create,
  trongridapi_post_wallet_createaccount_create,
  trongridapi_post_wallet_updateaccount_create
}
