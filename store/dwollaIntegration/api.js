import axios from "axios"
import { DWOLLA_INTEGRATIONS_TOKEN } from "react-native-dotenv"
const dwollaIntegration = axios.create({
  baseURL: "https://api-sandbox.dwolla.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${DWOLLA_INTEGRATIONS_TOKEN}`
  }
})
function dwollaintegration_post_customers_create(payload) {
  return dwollaIntegration.post(`/customers`, payload.data)
}
function dwollaintegration_get_customers_id_read(payload) {
  return dwollaIntegration.get(`/customers/id`)
}
export const apiService = {
  dwollaintegration_post_customers_create,
  dwollaintegration_get_customers_id_read
}
