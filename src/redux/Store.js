import { combineReducers, configureStore } from "@reduxjs/toolkit";
import KitchenParameter from './slices/KitchenSlice'
import BathroomParameter from "./slices/BathroomSlice";
import LivingroomParameter from "./slices/LivingroomSlice";
import ApiResponceSlice from "./slices/ApiResponceSlice";
import CommonStateSlice from "./slices/CommonStateSlice";


// Combine the undoable reducer for the kitchen slice
const rootReducer = combineReducers({
    KitchenParameter,
    BathroomParameter,
    LivingroomParameter,
    apiResponce: ApiResponceSlice,
    CommonState: CommonStateSlice
    // Add other reducers as needed
});

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});