import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState =
{
    filterData: {}
};


export const ApiResponceSlice = createSlice({
    name: 'ApiResponceSlice',
    initialState,
    reducers: {
        updateApiResponceSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetApiResponceSlice: () => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to kitchen slice
// const ApiResponceSliceParameter = undoable(ApiResponceSlice.reducer);

// Action creators are generated for each case reducer function
export const { updateApiResponceSlice, resetApiResponceSlice } = ApiResponceSlice.actions

// export default ApiResponceSliceParameter;
export default ApiResponceSlice.reducer;