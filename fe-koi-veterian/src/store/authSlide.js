import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { forgetPassword, login, register } from "../services/authService";

// Async Thunks for calling the API
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data || "Đã xảy ra lỗi");
    }
  }
);

export const registerNewUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const sendResetLink = createAsyncThunk(
  "auth/forgetPassword",
  async (email, thunkAPI) => {
    try {
      const response = await forgetPassword(email);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Auth slice with Redux Toolkit
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    authenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.authenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.authenticated = action.payload.authenticated;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle registration
      .addCase(registerNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerNewUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle forget password
      .addCase(sendResetLink.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendResetLink.fulfilled, (state) => {
        state.loading = false;
        // If no action data is needed, you can omit `action`
      })
      .addCase(sendResetLink.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // `action` is used here
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
