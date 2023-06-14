import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openaiapi_get_v1_engines_engine_id_read = createAsyncThunk(
  "openaiapi_response_get_Retrieveengines/openaiapi_get_v1_engines_engine_id_read",
  async payload => {
    const response = await apiService.openaiapi_get_v1_engines_engine_id_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openaiapi_response_get_RetrieveenginesSlice = createSlice({
  name: "openaiapi_response_get_Retrieveengines",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapi_get_v1_engines_engine_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openaiapi_get_v1_engines_engine_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [openaiapi_get_v1_engines_engine_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openaiapi_get_v1_engines_engine_id_read,
  slice: openaiapi_response_get_RetrieveenginesSlice
}
