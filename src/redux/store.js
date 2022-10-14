import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import priceSlice from "./priceSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        price: priceSlice.reducer,
    },
});

export default store;
