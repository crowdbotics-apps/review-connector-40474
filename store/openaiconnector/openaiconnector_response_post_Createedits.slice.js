import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const openaiconnector_post_v1_edits_create = createAsyncThunk("openaiconnector_response_post_Createedits/openaiconnector_post_v1_edits_create", async payload => {
  const response = await apiService.openaiconnector_post_v1_edits_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const openaiconnector_response_post_CreateeditsSlice = createSlice({
  name: "openaiconnector_response_post_Createedits",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiconnector_post_v1_edits_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [openaiconnector_post_v1_edits_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [openaiconnector_post_v1_edits_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  openaiconnector_post_v1_edits_create,
  slice: openaiconnector_response_post_CreateeditsSlice
};