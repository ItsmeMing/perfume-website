import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk("reviews/fetchreviews", async () => {
    const res = await fetch("https://fake-perfume-api.herokuapp.com/reviews");
    const data = await res.json();
    return data;
});

const reviewsSlice = createSlice({
    name: "cart",
    initialState: { status: "idle", data: [] },
    reducers: {
        addReview: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            });
    },
});

export default reviewsSlice;
