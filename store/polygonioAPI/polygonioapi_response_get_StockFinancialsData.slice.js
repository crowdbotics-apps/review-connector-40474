import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const polygonioapi_get_vX_reference_financials_read = createAsyncThunk(
  "polygonioapi_response_get_StockFinancialsData/polygonioapi_get_vX_reference_financials_read",
  async payload => {
    const response = await apiService.polygonioapi_get_vX_reference_financials_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const polygonioapi_response_get_StockFinancialsDataSlice = createSlice({
  name: "polygonioapi_response_get_StockFinancialsData",
  initialState,
  reducers: {},
  extraReducers: {
    [polygonioapi_get_vX_reference_financials_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [polygonioapi_get_vX_reference_financials_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [polygonioapi_get_vX_reference_financials_read.rejected]: (
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
  polygonioapi_get_vX_reference_financials_read,
  slice: polygonioapi_response_get_StockFinancialsDataSlice
}
