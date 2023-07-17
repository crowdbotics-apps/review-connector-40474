import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const openaiapis_get_v1_engines_list = createAsyncThunk("openaiapis_response_get_Listengines/openaiapis_get_v1_engines_list", async payload => {
  const response = await apiService.openaiapis_get_v1_engines_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const openaiapis_response_get_ListenginesSlice = createSlice({
  name: "openaiapis_response_get_Listengines",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapis_get_v1_engines_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [openaiapis_get_v1_engines_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [openaiapis_get_v1_engines_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  openaiapis_get_v1_engines_list,
  slice: openaiapis_response_get_ListenginesSlice
};