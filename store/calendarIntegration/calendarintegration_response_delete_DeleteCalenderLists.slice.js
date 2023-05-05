import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const calendarintegration_delete_users_me_calendarList_calender_id_delete = createAsyncThunk(
  "calendarintegration_response_delete_DeleteCalenderLists/calendarintegration_delete_users_me_calendarList_calender_id_delete",
  async payload => {
    const response = await apiService.calendarintegration_delete_users_me_calendarList_calender_id_delete(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const calendarintegration_response_delete_DeleteCalenderListsSlice = createSlice(
  {
    name: "calendarintegration_response_delete_DeleteCalenderLists",
    initialState,
    reducers: {},
    extraReducers: {
      [calendarintegration_delete_users_me_calendarList_calender_id_delete.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [calendarintegration_delete_users_me_calendarList_calender_id_delete.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      },
      [calendarintegration_delete_users_me_calendarList_calender_id_delete.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  calendarintegration_delete_users_me_calendarList_calender_id_delete,
  slice: calendarintegration_response_delete_DeleteCalenderListsSlice
}
