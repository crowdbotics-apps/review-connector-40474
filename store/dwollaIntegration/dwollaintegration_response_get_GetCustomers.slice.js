import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const dwollaintegration_get_customers_id_read = createAsyncThunk(
  "dwollaintegration_response_get_GetCustomers/dwollaintegration_get_customers_id_read",
  async payload => {
    const response = await apiService.dwollaintegration_get_customers_id_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dwollaintegration_response_get_GetCustomersSlice = createSlice({
  name: "dwollaintegration_response_get_GetCustomers",
  initialState,
  reducers: {},
  extraReducers: {
    [dwollaintegration_get_customers_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [dwollaintegration_get_customers_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [dwollaintegration_get_customers_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  dwollaintegration_get_customers_id_read,
  slice: dwollaintegration_response_get_GetCustomersSlice
}
