import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const raribleprotocolapi_get_v01_currencies_all_list = createAsyncThunk(
  "raribleprotocolapi_response_get_GetAllCurrencies/raribleprotocolapi_get_v01_currencies_all_list",
  async payload => {
    const response = await apiService.raribleprotocolapi_get_v01_currencies_all_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const raribleprotocolapi_response_get_GetAllCurrenciesSlice = createSlice({
  name: "raribleprotocolapi_response_get_GetAllCurrencies",
  initialState,
  reducers: {},
  extraReducers: {
    [raribleprotocolapi_get_v01_currencies_all_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [raribleprotocolapi_get_v01_currencies_all_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [raribleprotocolapi_get_v01_currencies_all_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  raribleprotocolapi_get_v01_currencies_all_list,
  slice: raribleprotocolapi_response_get_GetAllCurrenciesSlice
}
