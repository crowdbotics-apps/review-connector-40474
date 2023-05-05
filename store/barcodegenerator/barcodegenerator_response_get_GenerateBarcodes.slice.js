import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const barcodegenerator_get__read = createAsyncThunk(
  "barcodegenerator_response_get_GenerateBarcodes/barcodegenerator_get__read",
  async payload => {
    const response = await apiService.barcodegenerator_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const barcodegenerator_response_get_GenerateBarcodesSlice = createSlice({
  name: "barcodegenerator_response_get_GenerateBarcodes",
  initialState,
  reducers: {},
  extraReducers: {
    [barcodegenerator_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [barcodegenerator_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [barcodegenerator_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  barcodegenerator_get__read,
  slice: barcodegenerator_response_get_GenerateBarcodesSlice
}
