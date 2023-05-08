import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const alphavantageapi_get_query_list = createAsyncThunk("alphavantageapi_response_get_CryptoCurrencyTimeSeries/alphavantageapi_get_query_list", async payload => {
  const response = await apiService.alphavantageapi_get_query_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const alphavantageapi_response_get_CryptoCurrencyTimeSeriesSlice = createSlice({
  name: "alphavantageapi_response_get_CryptoCurrencyTimeSeries",
  initialState,
  reducers: {},
  extraReducers: {
    [alphavantageapi_get_query_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [alphavantageapi_get_query_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [alphavantageapi_get_query_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  alphavantageapi_get_query_list,
  slice: alphavantageapi_response_get_CryptoCurrencyTimeSeriesSlice
};