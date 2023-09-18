import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_supplier_list = createAsyncThunk(
  "suppliers/api_v1_supplier_list",
  async payload => {
    const response = await apiService.api_v1_supplier_list(payload)
    return response.data
  }
)
export const api_v1_supplier_create = createAsyncThunk(
  "suppliers/api_v1_supplier_create",
  async payload => {
    const response = await apiService.api_v1_supplier_create(payload)
    return response.data
  }
)
export const api_v1_supplier_retrieve = createAsyncThunk(
  "suppliers/api_v1_supplier_retrieve",
  async payload => {
    const response = await apiService.api_v1_supplier_retrieve(payload)
    return response.data
  }
)
export const api_v1_supplier_update = createAsyncThunk(
  "suppliers/api_v1_supplier_update",
  async payload => {
    const response = await apiService.api_v1_supplier_update(payload)
    return response.data
  }
)
export const api_v1_supplier_partial_update = createAsyncThunk(
  "suppliers/api_v1_supplier_partial_update",
  async payload => {
    const response = await apiService.api_v1_supplier_partial_update(payload)
    return response.data
  }
)
export const api_v1_supplier_destroy = createAsyncThunk(
  "suppliers/api_v1_supplier_destroy",
  async payload => {
    const response = await apiService.api_v1_supplier_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_supplier_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_supplier_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_supplier_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_supplier_list,
  api_v1_supplier_create,
  api_v1_supplier_retrieve,
  api_v1_supplier_update,
  api_v1_supplier_partial_update,
  api_v1_supplier_destroy,
  slice: suppliersSlice
}
