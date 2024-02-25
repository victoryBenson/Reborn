import { createSlice } from "@reduxjs/toolkit";
import { register } from "./userAction";
import {toast} from 'react-toastify'

const initialState = {
    isLoading: false,
    isError: null,
    isSuccess: false,
    userInfo: null,
    message: ""
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
            state.message = "";
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
            state.message = payload;
            state.userInfo = null;
            toast.error(payload)
        })

        // // getUsers
        // .addCase(register.pending, (state) => {
        //     state.isLoading = true
        //     state.isError = null
        // })
        // .addCase(register.fulfilled, (state, {payload}) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.userInfo = payload;
        //     toast.success(payload)
        // })
        // .addCase(register.rejected, (state, {payload}) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.message = payload;
        //     state.userInfo = null;
        //     toast.error(payload)
        // })
    }
})

export const {RESET_AUTH} =  userSlice.actions;
export default userSlice.reducer