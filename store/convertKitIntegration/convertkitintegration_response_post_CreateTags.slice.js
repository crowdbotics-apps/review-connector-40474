import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const convertkitintegration_post_tags_create = createAsyncThunk("convertkitintegration_response_post_CreateTags/convertkitintegration_post_tags_create", async payload => {
  const response = await apiService.convertkitintegration_post_tags_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const convertkitintegration_response_post_CreateTagsSlice = createSlice({
  name: "convertkitintegration_response_post_CreateTags",
  initialState,
  reducers: {},
  extraReducers: {
    [convertkitintegration_post_tags_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [convertkitintegration_post_tags_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [convertkitintegration_post_tags_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  convertkitintegration_post_tags_create,
  slice: convertkitintegration_response_post_CreateTagsSlice
};