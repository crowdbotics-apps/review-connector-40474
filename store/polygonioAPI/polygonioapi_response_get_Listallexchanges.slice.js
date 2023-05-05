import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const polygonioapi_get_v3_reference_exchanges_list = createAsyncThunk(
  "polygonioapi_response_get_Listallexchanges/polygonioapi_get_v3_reference_exchanges_list",
  async payload => {
    const response = await apiService.polygonioapi_get_v3_reference_exchanges_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const polygonioapi_response_get_ListallexchangesSlice = createSlice({
  name: "polygonioapi_response_get_Listallexchanges",
  initialState,
  reducers: {},
  extraReducers: {
    [polygonioapi_get_v3_reference_exchanges_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [polygonioapi_get_v3_reference_exchanges_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [polygonioapi_get_v3_reference_exchanges_list.rejected]: (
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
  polygonioapi_get_v3_reference_exchanges_list,
  slice: polygonioapi_response_get_ListallexchangesSlice
}
