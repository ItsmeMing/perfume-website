import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {
            list: [],
            productid: 0,
        },
        totalQuantity: 0,
    },
    reducers: {
        addCartItem: (state, action) => {
            state.cart.list.push(action.payload);
            state.cart.productid++;
            state.totalQuantity = 0;
            for (const item of state.cart.list) {
                state.totalQuantity += item.quantity;
            }
        },
        updatePlusCartItem: (state, action) => {
            state.cart.list[action.payload].quantity++;
            state.totalQuantity = 0;
            for (const item of state.cart.list) {
                state.totalQuantity += item.quantity;
            }
        },
        updateMinusCartItem: (state, action) => {
            state.cart.list[action.payload].quantity--;
            state.totalQuantity = 0;
            for (const item of state.cart.list) {
                state.totalQuantity += item.quantity;
            }
        },
        deleteCartItem: (state, action) => {
            state.cart.list.splice(action.payload, 1);
            for (let i = action.payload; i < state.cart.list.length; i++) {
                state.cart.list[i].id--;
            }
            state.cart.productid--;
            state.totalQuantity = 0;
            for (const item of state.cart.list) {
                state.totalQuantity += item.quantity;
            }
        },
    },
});

export default cartSlice;
