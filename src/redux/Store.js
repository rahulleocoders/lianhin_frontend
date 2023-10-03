import { combineReducers, configureStore } from "@reduxjs/toolkit";
import KitchenParameter from './slices/KitchenSlice'
import BathroomParameter from "./slices/BathroomSlice";

// Combine the undoable reducer for the kitchen slice

const rootReducer = combineReducers({
    KitchenParameter,
    BathroomParameter
    // Add other reducers as needed
});

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});