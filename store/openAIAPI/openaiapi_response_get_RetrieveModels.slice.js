import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openaiapi_get_v1_models_model_read = createAsyncThunk(
  "openaiapi_response_get_RetrieveModels/openaiapi_get_v1_models_model_read",
  async payload => {
    const response = await apiService.openaiapi_get_v1_models_model_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openaiapi_response_get_RetrieveModelsSlice = createSlice({
  name: "openaiapi_response_get_RetrieveModels",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapi_get_v1_models_model_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openaiapi_get_v1_models_model_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [openaiapi_get_v1_models_model_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openaiapi_get_v1_models_model_read,
  slice: openaiapi_response_get_RetrieveModelsSlice
}
