import { combineReducers, configureStore } from "@reduxjs/toolkit";
import KitchenParameter from './slices/KitchenSlice'
import BathroomParameter from "./slices/BathroomSlice";
import LivingroomParameter from "./slices/LivingroomSlice";
import ApiResponceSlice from "./slices/ApiResponceSlice";
import CommonStateSlice from "./slices/CommonStateSlice";
import Kitchen_1_Parameter from "./slices/Kitchen_1_Slice";

// Combine the undoable reducer for the kitchen slice
const rootReducer = combineReducers({
    KitchenParameter,
    BathroomParameter,
    LivingroomParameter,
    Kitchen_1_Parameter,
    apiResponce: ApiResponceSlice,
    CommonState: CommonStateSlice
    // Add other reducers as needed
});

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});