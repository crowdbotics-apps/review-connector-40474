import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const veetingintegration_post_meeting_close_create = createAsyncThunk(
  "veetingintegration_response_post_CloseMeetings/veetingintegration_post_meeting_close_create",
  async payload => {
    const response = await apiService.veetingintegration_post_meeting_close_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const veetingintegration_response_post_CloseMeetingsSlice = createSlice({
  name: "veetingintegration_response_post_CloseMeetings",
  initialState,
  reducers: {},
  extraReducers: {
    [veetingintegration_post_meeting_close_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [veetingintegration_post_meeting_close_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [veetingintegration_post_meeting_close_create.rejected]: (
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
  veetingintegration_post_meeting_close_create,
  slice: veetingintegration_response_post_CloseMeetingsSlice
}
