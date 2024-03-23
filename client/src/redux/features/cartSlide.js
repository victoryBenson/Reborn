import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++;
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast("Product is added to cart");
      }
    },

    increaseCart(state, {payload}) {
      const item = state.cartItems.find((item) => item._id === payload);
      item.cartQuantity++;
    },

    displayCart(state, {payload}){
        const item = state.cartItems.find((item) => item._id === payload);
      item.cartQuantity;
    },

    decreaseCart(state, {payload}) {
      const item = state.cartItems.find((item) => item._id === payload);
      if (item.cartQuantity === 1) {
        const deleteItem = state.cartItems.filter(
          (item) => item._id !== payload
        );
        state.cartItems = deleteItem;
      } else {
        item.cartQuantity--;
      }
    },

    removeCart(state, {payload}) {
      const deleteItem = state.cartItems.filter(
        (item) => item._id !== payload
      );
      state.cartItems = deleteItem;
    },
    
    getTotals(state, action) {
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
            const {price, cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;

            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;

            return cartTotal
        }, 
        {
        total: 0,
        quantity: 0,
      }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total
    },
  },
});

export const {
  addToCart,
  getTotalQuantity,
  increaseCart,
  decreaseCart,
  removeCart,
  getTotals,   
  displayCart,
  cartItems
} = cartSlide.actions;
export default cartSlide.reducer;
