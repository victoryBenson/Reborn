import { createSlice } from "@reduxjs/toolkit";
import { loginUser, LogoutUser} from "./authActions";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  errMessage: "",
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
      // state.userInfo = null;
      state.errMessage = "";
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
        state.userInfo = payload;
        state.isLoggedIn = true;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errMessage = payload;
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
        state.errMessage = payload;
        toast.error(payload);
      });
  },
});

export const { Reset_Auth } = authSlice.actions;
export default authSlice.reducer;
