import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import priceSlice from "./priceSlice";
import userSlice from "./userSlice";
import reviewsSlice from "./reviewsSlice";
import ordersSlice from "./orders";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        price: priceSlice.reducer,
        user: userSlice.reducer,
        reviews: reviewsSlice.reducer,
        orders: ordersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
