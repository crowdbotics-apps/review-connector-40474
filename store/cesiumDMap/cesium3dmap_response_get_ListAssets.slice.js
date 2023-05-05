import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const cesium3dmap_get_assets_read = createAsyncThunk(
  "cesium3dmap_response_get_ListAssets/cesium3dmap_get_assets_read",
  async payload => {
    const response = await apiService.cesium3dmap_get_assets_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cesium3dmap_response_get_ListAssetsSlice = createSlice({
  name: "cesium3dmap_response_get_ListAssets",
  initialState,
  reducers: {},
  extraReducers: {
    [cesium3dmap_get_assets_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [cesium3dmap_get_assets_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [cesium3dmap_get_assets_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  cesium3dmap_get_assets_read,
  slice: cesium3dmap_response_get_ListAssetsSlice
}
