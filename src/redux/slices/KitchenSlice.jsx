import { createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

// Define the initial state
const initialState =
{
    ActiveObject: {},
    Backsplash: {},
    Cabinet: {},
    Countertop: {},
    Floor: {},
    Integrated_Sink: {},
    Wall: {},





    floorParameter: {
        CureentfloorTexture: "Marbletexture[0]",
    },
    wallParameter: {
        wallTexture: "Bathroom_wall_tiles[0]"
    },
    cabibate: {
        TopTexture: "Bathroom_marble[1]",
        BodyTexture: "Bathroom_marble[1]"
    },
    door: {
        texture: "Wooden_texture[1]"
    }
};


export const kitchenSlice = createSlice({
    name: 'kitchenSlice',
    initialState,
    reducers: {
        updateKitchenSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetkitchenSlice: () => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to your kitchen slice
const KitchenParameter = undoable(kitchenSlice.reducer);

// Action creators are generated for each case reducer function
export const { updateKitchenSlice, resetkitchenSlice } = kitchenSlice.actions

export default KitchenParameter;