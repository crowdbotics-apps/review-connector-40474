import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openaiapi_get_v1_models_list = createAsyncThunk(
  "openaiapi_response_get_Listmodels/openaiapi_get_v1_models_list",
  async payload => {
    const response = await apiService.openaiapi_get_v1_models_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openaiapi_response_get_ListmodelsSlice = createSlice({
  name: "openaiapi_response_get_Listmodels",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapi_get_v1_models_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openaiapi_get_v1_models_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [openaiapi_get_v1_models_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openaiapi_get_v1_models_list,
  slice: openaiapi_response_get_ListmodelsSlice
}
