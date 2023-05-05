import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendarintegration_get_users_me_calendarList_list = createAsyncThunk(
  "calendarintegration_response_get_GetCalenderLists/calendarintegration_get_users_me_calendarList_list",
  async payload => {
    const response = await apiService.calendarintegration_get_users_me_calendarList_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendarintegration_response_get_GetCalenderListsSlice = createSlice({
  name: "calendarintegration_response_get_GetCalenderLists",
  initialState,
  reducers: {},
  extraReducers: {
    [calendarintegration_get_users_me_calendarList_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [calendarintegration_get_users_me_calendarList_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [calendarintegration_get_users_me_calendarList_list.rejected]: (
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
  calendarintegration_get_users_me_calendarList_list,
  slice: calendarintegration_response_get_GetCalenderListsSlice
}
