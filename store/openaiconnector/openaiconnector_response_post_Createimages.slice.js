import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const openaiconnector_post_v1_images_generations_create = createAsyncThunk("openaiconnector_response_post_Createimages/openaiconnector_post_v1_images_generations_create", async payload => {
  const response = await apiService.openaiconnector_post_v1_images_generations_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const openaiconnector_response_post_CreateimagesSlice = createSlice({
  name: "openaiconnector_response_post_Createimages",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiconnector_post_v1_images_generations_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [openaiconnector_post_v1_images_generations_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [openaiconnector_post_v1_images_generations_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  openaiconnector_post_v1_images_generations_create,
  slice: openaiconnector_response_post_CreateimagesSlice
};