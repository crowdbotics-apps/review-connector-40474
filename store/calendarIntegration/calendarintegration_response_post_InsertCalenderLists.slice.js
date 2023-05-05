import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendarintegration_post_users_me_calendarList_create = createAsyncThunk(
  "calendarintegration_response_post_InsertCalenderLists/calendarintegration_post_users_me_calendarList_create",
  async payload => {
    const response = await apiService.calendarintegration_post_users_me_calendarList_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendarintegration_response_post_InsertCalenderListsSlice = createSlice({
  name: "calendarintegration_response_post_InsertCalenderLists",
  initialState,
  reducers: {},
  extraReducers: {
    [calendarintegration_post_users_me_calendarList_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [calendarintegration_post_users_me_calendarList_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [calendarintegration_post_users_me_calendarList_create.rejected]: (
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
  calendarintegration_post_users_me_calendarList_create,
  slice: calendarintegration_response_post_InsertCalenderListsSlice
}
