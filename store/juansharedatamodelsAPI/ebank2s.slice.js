import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ebank2_list = createAsyncThunk(
  "ebank2s/api_v1_ebank2_list",
  async payload => {
    const response = await apiService.api_v1_ebank2_list(payload)
    return response.data
  }
)
export const api_v1_ebank2_create = createAsyncThunk(
  "ebank2s/api_v1_ebank2_create",
  async payload => {
    const response = await apiService.api_v1_ebank2_create(payload)
    return response.data
  }
)
export const api_v1_ebank2_retrieve = createAsyncThunk(
  "ebank2s/api_v1_ebank2_retrieve",
  async payload => {
    const response = await apiService.api_v1_ebank2_retrieve(payload)
    return response.data
  }
)
export const api_v1_ebank2_update = createAsyncThunk(
  "ebank2s/api_v1_ebank2_update",
  async payload => {
    const response = await apiService.api_v1_ebank2_update(payload)
    return response.data
  }
)
export const api_v1_ebank2_partial_update = createAsyncThunk(
  "ebank2s/api_v1_ebank2_partial_update",
  async payload => {
    const response = await apiService.api_v1_ebank2_partial_update(payload)
    return response.data
  }
)
export const api_v1_ebank2_destroy = createAsyncThunk(
  "ebank2s/api_v1_ebank2_destroy",
  async payload => {
    const response = await apiService.api_v1_ebank2_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ebank2sSlice = createSlice({
  name: "ebank2s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ebank2_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank2_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank2_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ebank2_list,
  api_v1_ebank2_create,
  api_v1_ebank2_retrieve,
  api_v1_ebank2_update,
  api_v1_ebank2_partial_update,
  api_v1_ebank2_destroy,
  slice: ebank2sSlice
}
