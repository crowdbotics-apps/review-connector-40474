import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const raribleprotocolapi_get_v01_items_itemId_list = createAsyncThunk("raribleprotocolapi_response_get_GetNftByIds/raribleprotocolapi_get_v01_items_itemId_list", async payload => {
  const response = await apiService.raribleprotocolapi_get_v01_items_itemId_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const raribleprotocolapi_response_get_GetNftByIdsSlice = createSlice({
  name: "raribleprotocolapi_response_get_GetNftByIds",
  initialState,
  reducers: {},
  extraReducers: {
    [raribleprotocolapi_get_v01_items_itemId_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [raribleprotocolapi_get_v01_items_itemId_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [raribleprotocolapi_get_v01_items_itemId_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  raribleprotocolapi_get_v01_items_itemId_list,
  slice: raribleprotocolapi_response_get_GetNftByIdsSlice
};