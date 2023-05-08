import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const dwollaintegration_post_customers_create = createAsyncThunk("dwollaintegration_response_post_CreateCustomers/dwollaintegration_post_customers_create", async payload => {
  const response = await apiService.dwollaintegration_post_customers_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const dwollaintegration_response_post_CreateCustomersSlice = createSlice({
  name: "dwollaintegration_response_post_CreateCustomers",
  initialState,
  reducers: {},
  extraReducers: {
    [dwollaintegration_post_customers_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [dwollaintegration_post_customers_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [dwollaintegration_post_customers_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  dwollaintegration_post_customers_create,
  slice: dwollaintegration_response_post_CreateCustomersSlice
};