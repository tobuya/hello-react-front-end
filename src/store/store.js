import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "../store/greetingsSlice";

const store = configureStore({
    reducer: {
        greetings: greetingsReducer,
    }
});

export default store;
