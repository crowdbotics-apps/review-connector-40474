import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const cesium3dmap_post_assets_create = createAsyncThunk("cesium3dmap_response_post_CreateAssets/cesium3dmap_post_assets_create", async payload => {
  const response = await apiService.cesium3dmap_post_assets_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const cesium3dmap_response_post_CreateAssetsSlice = createSlice({
  name: "cesium3dmap_response_post_CreateAssets",
  initialState,
  reducers: {},
  extraReducers: {
    [cesium3dmap_post_assets_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [cesium3dmap_post_assets_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [cesium3dmap_post_assets_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  cesium3dmap_post_assets_create,
  slice: cesium3dmap_response_post_CreateAssetsSlice
};