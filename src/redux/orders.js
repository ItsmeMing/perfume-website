import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create thunk action and thunk action creator

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    const res = await fetch("http://localhost:3001/api/orders");
    const data = await res.json();
    return data;
});

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            });
    },
});

export default ordersSlice;
