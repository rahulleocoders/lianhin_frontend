import { combineReducers, configureStore } from "@reduxjs/toolkit";
import KitchenParameter from './slices/KitchenSlice'
import BathroomParameter from "./slices/BathroomSlice";
import ApiResponceSlice from "./slices/ApiResponceSlice";


// Combine the undoable reducer for the kitchen slice
const rootReducer = combineReducers({
    KitchenParameter,
    BathroomParameter,
    apiResponce: ApiResponceSlice
    // Add other reducers as needed
});

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});