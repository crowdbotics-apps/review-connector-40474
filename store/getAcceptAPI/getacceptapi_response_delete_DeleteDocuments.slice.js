import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const getacceptapi_delete_v1_documents_DOCUMENT_ID_delete = createAsyncThunk("getacceptapi_response_delete_DeleteDocuments/getacceptapi_delete_v1_documents_DOCUMENT_ID_delete", async payload => {
  const response = await apiService.getacceptapi_delete_v1_documents_DOCUMENT_ID_delete(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const getacceptapi_response_delete_DeleteDocumentsSlice = createSlice({
  name: "getacceptapi_response_delete_DeleteDocuments",
  initialState,
  reducers: {},
  extraReducers: {
    [getacceptapi_delete_v1_documents_DOCUMENT_ID_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [getacceptapi_delete_v1_documents_DOCUMENT_ID_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [getacceptapi_delete_v1_documents_DOCUMENT_ID_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  getacceptapi_delete_v1_documents_DOCUMENT_ID_delete,
  slice: getacceptapi_response_delete_DeleteDocumentsSlice
};