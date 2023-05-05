import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const cesium3dmap_delete_assets_assets_id_delete = createAsyncThunk(
  "cesium3dmap_response_delete_DeleteAssets/cesium3dmap_delete_assets_assets_id_delete",
  async payload => {
    const response = await apiService.cesium3dmap_delete_assets_assets_id_delete(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cesium3dmap_response_delete_DeleteAssetsSlice = createSlice({
  name: "cesium3dmap_response_delete_DeleteAssets",
  initialState,
  reducers: {},
  extraReducers: {
    [cesium3dmap_delete_assets_assets_id_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [cesium3dmap_delete_assets_assets_id_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [cesium3dmap_delete_assets_assets_id_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  cesium3dmap_delete_assets_assets_id_delete,
  slice: cesium3dmap_response_delete_DeleteAssetsSlice
}
