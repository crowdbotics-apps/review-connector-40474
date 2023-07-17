import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const trongridapi_post_wallet_updateaccount_create = createAsyncThunk("trongridapi_response_post_UpdateWalletAccounts/trongridapi_post_wallet_updateaccount_create", async payload => {
  const response = await apiService.trongridapi_post_wallet_updateaccount_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const trongridapi_response_post_UpdateWalletAccountsSlice = createSlice({
  name: "trongridapi_response_post_UpdateWalletAccounts",
  initialState,
  reducers: {},
  extraReducers: {
    [trongridapi_post_wallet_updateaccount_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [trongridapi_post_wallet_updateaccount_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [trongridapi_post_wallet_updateaccount_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  trongridapi_post_wallet_updateaccount_create,
  slice: trongridapi_response_post_UpdateWalletAccountsSlice
};