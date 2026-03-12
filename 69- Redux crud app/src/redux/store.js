import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customer";

const store = configureStore({
    reducer: {
        customer: customerReducer
    }
})

export default store