import { BathroomAnnotationArray } from "@/local_data";
import { createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

// Define the initial state
const initialState =
{
    ActiveObject: BathroomAnnotationArray[0],
    Backsplash: {
        texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    },
    floor: {
        texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    },
    vanityTop: {
        texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    },
    wall: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg"
    },
    cabibate: {
        TopTexture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
        BodyTexture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg"
    },
    door: {
        texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg"
    }
};


export const bathroomSlice = createSlice({
    name: 'bathroomSlice',
    initialState,
    reducers: {
        updatebathroomSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetbathroomSlice: () => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to kitchen slice
const BathroomParameter = undoable(bathroomSlice.reducer);

// Action creators are generated for each case reducer function
export const { updatebathroomSlice, resetbathroomSlice } = bathroomSlice.actions

export default BathroomParameter;