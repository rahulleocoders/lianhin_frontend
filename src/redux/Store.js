import { combineReducers, configureStore } from "@reduxjs/toolkit";
import KitchenParameter from './slices/KitchenSlice'

// Combine the undoable reducer for the kitchen slice
const rootReducer = combineReducers({
    KitchenParameter,
    // Add other reducers as needed
});

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});