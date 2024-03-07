import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const backendURL = "http://127.0.0.1:3000/api/products/";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (productData, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        const response = await axios.get(
          `${backendURL}getProducts`,
          productData,
          config
        );
        return response.data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
);

export const getTotalProduct = createAsyncThunk(
  "products/getTotalProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        `${backendURL}getTotalProduct`,
        productData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.patch(
        `${backendURL}updateProduct`,
        productData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.patch(
        `${backendURL}deleteProduct`,
        productData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
