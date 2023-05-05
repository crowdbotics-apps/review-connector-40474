import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const bionicreadingapi_post_convert_create = createAsyncThunk(
  "bionicreadingapi_response_post_ConvertContents/bionicreadingapi_post_convert_create",
  async payload => {
    const response = await apiService.bionicreadingapi_post_convert_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bionicreadingapi_response_post_ConvertContentsSlice = createSlice({
  name: "bionicreadingapi_response_post_ConvertContents",
  initialState,
  reducers: {},
  extraReducers: {
    [bionicreadingapi_post_convert_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [bionicreadingapi_post_convert_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [bionicreadingapi_post_convert_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  bionicreadingapi_post_convert_create,
  slice: bionicreadingapi_response_post_ConvertContentsSlice
}
