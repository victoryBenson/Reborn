import { createSlice } from "@reduxjs/toolkit";
import { UsersTotal, getUsers, register } from "./userAction";
import {toast} from 'react-toastify'

const initialState = {
    isLoading: false,
    isError: null,
    isSuccess: false,
    userInfo: null,
    errMessage: "",
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        RESET_AUTH(state) {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.userInfo = null;
            state.errMessage = "";
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
        // register
        .addCase(register.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userInfo = payload;
            toast.success(payload)
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.userInfo = null;
            toast.error(payload)
        })

        // getUsers
        .addCase(getUsers.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userInfo = payload;
            toast.success(payload)
        })
        .addCase(getUsers.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.userInfo = null;
            toast.error(payload)
        })

         // UserCount
        .addCase(UsersTotal.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(UsersTotal.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;
        })
        .addCase(UsersTotal.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.data = null;
        })
    }
})

export const {RESET_AUTH} =  userSlice.actions;
export default userSlice.reducer