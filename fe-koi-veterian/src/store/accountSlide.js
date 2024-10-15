import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAccountByUsername,
  fetchAvailableVeterinarians,
} from "../services/accountService";

// Async thunk to fetch account by username
export const getAccountByUsername = createAsyncThunk(
  "account/fetchByUsername",
  async (username, thunkAPI) => {
    try {
      const response = await fetchAccountByUsername(username);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch available veterinarians by date and shiftId
export const getAvailableVeterinarians = createAsyncThunk(
  "account/fetchAvailableVeterinarians",
  async ({ date, shiftId }, thunkAPI) => {
    try {
      const response = await fetchAvailableVeterinarians(date, shiftId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountInfo: null,
    availableVeterinarians: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearAvailableVeterinarians: (state) => {
      console.log("Clearing available veterinarians"); // Log for debugging
      state.availableVeterinarians = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountByUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountByUsername.fulfilled, (state, action) => {
        console.log("Fetched account info:", action.payload);
        state.loading = false;
        state.accountInfo = action.payload;
      })
      .addCase(getAccountByUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAvailableVeterinarians.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAvailableVeterinarians.fulfilled, (state, action) => {
        state.loading = false;
        state.availableVeterinarians = action.payload;
      })
      .addCase(getAvailableVeterinarians.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
