import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const texttranslatorapi_post_translate_create = createAsyncThunk(
  "texttranslatorapi_response_post_TranslateTexts/texttranslatorapi_post_translate_create",
  async payload => {
    const response = await apiService.texttranslatorapi_post_translate_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const texttranslatorapi_response_post_TranslateTextsSlice = createSlice({
  name: "texttranslatorapi_response_post_TranslateTexts",
  initialState,
  reducers: {},
  extraReducers: {
    [texttranslatorapi_post_translate_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [texttranslatorapi_post_translate_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [texttranslatorapi_post_translate_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  texttranslatorapi_post_translate_create,
  slice: texttranslatorapi_response_post_TranslateTextsSlice
}
