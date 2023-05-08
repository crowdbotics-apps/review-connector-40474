import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const veetingintegration_post_api_v6_meeting_create = createAsyncThunk("veetingintegration_response_post_CreateMeetings/veetingintegration_post_api_v6_meeting_create", async payload => {
  const response = await apiService.veetingintegration_post_api_v6_meeting_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const veetingintegration_response_post_CreateMeetingsSlice = createSlice({
  name: "veetingintegration_response_post_CreateMeetings",
  initialState,
  reducers: {},
  extraReducers: {
    [veetingintegration_post_api_v6_meeting_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [veetingintegration_post_api_v6_meeting_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [veetingintegration_post_api_v6_meeting_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  veetingintegration_post_api_v6_meeting_create,
  slice: veetingintegration_response_post_CreateMeetingsSlice
};