import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const getacceptapi_post_v1_documents_create = createAsyncThunk(
  "getacceptapi_response_post_CreateDocuments/getacceptapi_post_v1_documents_create",
  async payload => {
    const response = await apiService.getacceptapi_post_v1_documents_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const getacceptapi_response_post_CreateDocumentsSlice = createSlice({
  name: "getacceptapi_response_post_CreateDocuments",
  initialState,
  reducers: {},
  extraReducers: {
    [getacceptapi_post_v1_documents_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [getacceptapi_post_v1_documents_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [getacceptapi_post_v1_documents_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  getacceptapi_post_v1_documents_create,
  slice: getacceptapi_response_post_CreateDocumentsSlice
}
