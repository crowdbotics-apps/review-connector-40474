import axios from "axios"
import { ALPHA_VANTAGE_API_SUPPORT_TOKEN } from "react-native-dotenv"
const alphaVantageAPI = axios.create({
  baseURL: "https://alpha-vantage.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ALPHA_VANTAGE_API_SUPPORT_TOKEN}`
  }
})
function alphavantageapi_get_query_list(payload) {
  return alphaVantageAPI.get(`/query`, {
    params: {
      function: payload.function,
      symbol: payload.symbol,
      datatype: payload.datatype
    }
  })
}
function alphavantageapi_get_query_list(payload) {
  return alphaVantageAPI.get(`/query `, {
    params: {
      from_symbol: payload.from_symbol,
      function: payload.function,
      to_symbol: payload.to_symbol,
      datatype: payload.datatype
    }
  })
}
function alphavantageapi_get_query_list(payload) {
  return alphaVantageAPI.get(`/query  `, {
    params: {
      market: payload.market,
      symbol: payload.symbol,
      function: payload.function
    }
  })
}
export const apiService = {
  alphavantageapi_get_query_list,
  alphavantageapi_get_query_list,
  alphavantageapi_get_query_list
}
