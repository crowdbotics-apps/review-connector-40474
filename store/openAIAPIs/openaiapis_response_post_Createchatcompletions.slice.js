import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const openaiapis_post_v1_chat_completions_create = createAsyncThunk("openaiapis_response_post_Createchatcompletions/openaiapis_post_v1_chat_completions_create", async payload => {
  const response = await apiService.openaiapis_post_v1_chat_completions_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const openaiapis_response_post_CreatechatcompletionsSlice = createSlice({
  name: "openaiapis_response_post_Createchatcompletions",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapis_post_v1_chat_completions_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [openaiapis_post_v1_chat_completions_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [openaiapis_post_v1_chat_completions_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  openaiapis_post_v1_chat_completions_create,
  slice: openaiapis_response_post_CreatechatcompletionsSlice
};