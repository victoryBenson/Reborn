import { createSlice } from "@reduxjs/toolkit";
import { loginUser, LogoutUser} from "./authActions";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  message: "",
  userInfo: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Reset_Auth(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoggedIn = false;
      state.userInfo = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      //login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = payload;
        state.isLoggedIn = true;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.isLoggedIn = false;
        state.userInfo = null;
        toast.error(payload);
      })
   
      //logout User
      .addCase(LogoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(LogoutUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = false;
        state.userInfo = null;
        toast.success(payload);
      })
      .addCase(LogoutUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        toast.error(payload);
      });
  },
});

export const { Reset_Auth } = authSlice.actions;
export default authSlice.reducer;