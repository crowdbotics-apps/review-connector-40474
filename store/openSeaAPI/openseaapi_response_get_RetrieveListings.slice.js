import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openseaapi_get_orders_goerli_seaport_listings_list = createAsyncThunk(
  "openseaapi_response_get_RetrieveListings/openseaapi_get_orders_goerli_seaport_listings_list",
  async payload => {
    const response = await apiService.openseaapi_get_orders_goerli_seaport_listings_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openseaapi_response_get_RetrieveListingsSlice = createSlice({
  name: "openseaapi_response_get_RetrieveListings",
  initialState,
  reducers: {},
  extraReducers: {
    [openseaapi_get_orders_goerli_seaport_listings_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openseaapi_get_orders_goerli_seaport_listings_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [openseaapi_get_orders_goerli_seaport_listings_list.rejected]: (
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
  openseaapi_get_orders_goerli_seaport_listings_list,
  slice: openseaapi_response_get_RetrieveListingsSlice
}
