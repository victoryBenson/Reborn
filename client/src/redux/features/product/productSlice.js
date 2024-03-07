import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getProducts, getTotalProduct } from "./productAction";

const initialState = {
    isLoading: false,
    isError: null,
    isSuccess: false,
    items: null,
    errMessage: "",
    data: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        RESET_AUTH(state) {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.items = null;
            state.errMessage = "";
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
        // getProducts
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(getProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items = payload;
        })
        .addCase(getProducts.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.items = null;
            // toast.error(payload)
        })

        // getTotalProduct
        .addCase(getTotalProduct.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(getTotalProduct.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;
        })
        .addCase(getTotalProduct.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.data = null;
            // toast.error(payload)
        })
    }    
})

export const {RESET_AUTH} =  productSlice.actions;
export default productSlice.reducer