import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete = createAsyncThunk("raribleprotocolapi_response_delete_DeleteNfts/raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete", async payload => {
  const response = await apiService.raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const raribleprotocolapi_response_delete_DeleteNftsSlice = createSlice({
  name: "raribleprotocolapi_response_delete_DeleteNfts",
  initialState,
  reducers: {},
  extraReducers: {
    [raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  raribleprotocolapi_delete_v01_items_itemId_resetMeta_delete,
  slice: raribleprotocolapi_response_delete_DeleteNftsSlice
};