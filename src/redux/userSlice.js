import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        logged: "false",
        name: "",
    },
    reducers: {
        enableLoginStatus: (state, action) => {
            state.logged = "true";
            state.name = action.payload;
        },
        disableLoginStatus: (state, action) => {
            state.logged = "false";
            state.name = "";
        },
    },
});

export default userSlice;
