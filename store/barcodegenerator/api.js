import axios from "axios"
const barcodegenerator = axios.create({
  baseURL: "https://barcode.codereadr.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function barcodegenerator_get__read(payload) {
  return barcodegenerator.get(`/`, {
    params: {
      section: payload.section,
      action: payload.action,
      api_key: payload.api_key,
      value: payload.value,
      size: payload.size,
      valuesize: payload.valuesize,
      text: payload.text,
      barcodetype: payload.barcodetype,
      filetype: payload.filetype
    }
  })
}
export const apiService = { barcodegenerator_get__read }
