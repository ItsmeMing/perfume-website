import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {
            list: [],
            productid: 0,
        },
    },
    reducers: {
        addCartItem: (state, action) => {
            state.cart.list.push(action.payload);
            state.cart.productid++;
        },
        updatePlusCartItem: (state, action) => {
            state.cart.list[action.payload].quantity++;
        },
        updateMinusCartItem: (state, action) => {
            state.cart.list[action.payload].quantity--;
        },
        deleteCartItem: (state, action) => {
            state.cart.list.splice(action.payload, 1);
            for (let i = action.payload; i < state.cart.list.length; i++) {
                state.cart.list[i].id--;
            }
            state.cart.productid--;
        },
    },
});

export default cartSlice;
