import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const getacceptapi_get_v1_documents_list = createAsyncThunk(
  "getacceptapi_response_get_GetDocuments/getacceptapi_get_v1_documents_list",
  async payload => {
    const response = await apiService.getacceptapi_get_v1_documents_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const getacceptapi_response_get_GetDocumentsSlice = createSlice({
  name: "getacceptapi_response_get_GetDocuments",
  initialState,
  reducers: {},
  extraReducers: {
    [getacceptapi_get_v1_documents_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [getacceptapi_get_v1_documents_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [getacceptapi_get_v1_documents_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  getacceptapi_get_v1_documents_list,
  slice: getacceptapi_response_get_GetDocumentsSlice
}
