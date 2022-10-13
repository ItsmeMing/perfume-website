import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create thunk action and thunk action creator

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch("http://localhost:3001/api/products");
    const data = await res.json();
    return data;
});

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const res = await fetch("http://localhost:3001/api/categories");
    const data = await res.json();
    return data;
});

const productSlice = createSlice({
    name: "cart",
    initialState: {
        categories: {
            status: "idle",
            data: [],
        },
        products: {
            status: "idle",
            data: [],
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.products.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.status = "idle";
                state.products.data = action.payload;
            })
            .addCase(fetchCategories.pending, (state, action) => {
                state.categories.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories.status = "idle";
                state.categories.data = action.payload;
            });
    },
});

export default productSlice;
