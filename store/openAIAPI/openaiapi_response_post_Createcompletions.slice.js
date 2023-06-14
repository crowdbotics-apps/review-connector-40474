import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const openaiapi_post_v1_completions_create = createAsyncThunk(
  "openaiapi_response_post_Createcompletions/openaiapi_post_v1_completions_create",
  async payload => {
    const response = await apiService.openaiapi_post_v1_completions_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const openaiapi_response_post_CreatecompletionsSlice = createSlice({
  name: "openaiapi_response_post_Createcompletions",
  initialState,
  reducers: {},
  extraReducers: {
    [openaiapi_post_v1_completions_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [openaiapi_post_v1_completions_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [openaiapi_post_v1_completions_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  openaiapi_post_v1_completions_create,
  slice: openaiapi_response_post_CreatecompletionsSlice
}
