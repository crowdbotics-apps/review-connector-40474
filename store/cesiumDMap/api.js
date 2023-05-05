import axios from "axios"
import { CESIUM_3D_MAPS_API_TOKEN } from "react-native-dotenv"
const cesiumDMap = axios.create({
  baseURL: "https://api.cesium.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CESIUM_3D_MAPS_API_TOKEN}`
  }
})
function cesium3dmap_get_assets_read(payload) {
  return cesiumDMap.get(`/assets`)
}
function cesium3dmap_post_assets_create(payload) {
  return cesiumDMap.post(`/assets`, payload.data)
}
function cesium3dmap_delete_assets_assets_id_delete(payload) {
  return cesiumDMap.delete(`/assets/${payload.assets_id}`)
}
export const apiService = {
  cesium3dmap_get_assets_read,
  cesium3dmap_post_assets_create,
  cesium3dmap_delete_assets_assets_id_delete
}
