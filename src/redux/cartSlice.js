import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        update: (state, action) => {
            state.products = action.payload.product;
        }
    }
})

export const { update } = cartSlice.actions;
export default cartSlice.reducer;