import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create thunk action and thunk action creator

export const fetchPrice = createAsyncThunk("price/fetchPrice", async () => {
    const res = await fetch("http://localhost:3001/api/price");
    const data = await res.json();
    return data;
});

const priceSlice = createSlice({
    name: "cart",
    initialState: {
        status: "idle",
        data: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrice.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPrice.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            });
    },
});

export default priceSlice;
