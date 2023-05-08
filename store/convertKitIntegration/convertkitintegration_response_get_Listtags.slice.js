import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const convertkitintegration_get_tags_read = createAsyncThunk("convertkitintegration_response_get_Listtags/convertkitintegration_get_tags_read", async payload => {
  const response = await apiService.convertkitintegration_get_tags_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const convertkitintegration_response_get_ListtagsSlice = createSlice({
  name: "convertkitintegration_response_get_Listtags",
  initialState,
  reducers: {},
  extraReducers: {
    [convertkitintegration_get_tags_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [convertkitintegration_get_tags_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [convertkitintegration_get_tags_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  convertkitintegration_get_tags_read,
  slice: convertkitintegration_response_get_ListtagsSlice
};