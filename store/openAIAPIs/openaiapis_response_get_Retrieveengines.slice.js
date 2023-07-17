import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const openaiapis_get_v1_engines_engine_id_read = createAsyncThunk("openaiapis_response_get_Retrieveengines/openaiapis_get_v1_engines_engine_id_read", async payload => {
  const response = await apiService.openaiapis_get_v1_engines_engine_id_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const openaiapis_response_get_RetrieveenginesSlice = createSlice({
  name: "openaiapis_response_get_Retrieveengines",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapis_get_v1_engines_engine_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [openaiapis_get_v1_engines_engine_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [openaiapis_get_v1_engines_engine_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  openaiapis_get_v1_engines_engine_id_read,
  slice: openaiapis_response_get_RetrieveenginesSlice
};