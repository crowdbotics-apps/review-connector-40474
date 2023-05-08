import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const uszipcodeapi_get__read = createAsyncThunk("uszipcodeapi_response_get_GetZipCodeInfos/uszipcodeapi_get__read", async payload => {
  const response = await apiService.uszipcodeapi_get__read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const uszipcodeapi_response_get_GetZipCodeInfosSlice = createSlice({
  name: "uszipcodeapi_response_get_GetZipCodeInfos",
  initialState,
  reducers: {},
  extraReducers: {
    [uszipcodeapi_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [uszipcodeapi_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [uszipcodeapi_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  uszipcodeapi_get__read,
  slice: uszipcodeapi_response_get_GetZipCodeInfosSlice
};