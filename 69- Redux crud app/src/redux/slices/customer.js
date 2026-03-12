import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customers: [],
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: (state, action) => {
            state.customers.push({
                id: Date.now(),
                ...action.payload,
            });
        },
        updateCustomer: (state, action) => {
            const index = state.customers.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = { ...state.customers[index], ...action.payload };
            }
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter(c => c.id !== action.payload);
        },
    },
});

export const { createCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;