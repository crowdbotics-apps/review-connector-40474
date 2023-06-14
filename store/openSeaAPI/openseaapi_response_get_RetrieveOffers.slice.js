import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openseaapi_get_orders_goerli_seaport_offers_list = createAsyncThunk(
  "openseaapi_response_get_RetrieveOffers/openseaapi_get_orders_goerli_seaport_offers_list",
  async payload => {
    const response = await apiService.openseaapi_get_orders_goerli_seaport_offers_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openseaapi_response_get_RetrieveOffersSlice = createSlice({
  name: "openseaapi_response_get_RetrieveOffers",
  initialState,
  reducers: {},
  extraReducers: {
    [openseaapi_get_orders_goerli_seaport_offers_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openseaapi_get_orders_goerli_seaport_offers_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [openseaapi_get_orders_goerli_seaport_offers_list.rejected]: (
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
  openseaapi_get_orders_goerli_seaport_offers_list,
  slice: openseaapi_response_get_RetrieveOffersSlice
}
