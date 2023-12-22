import { LivingroomAnnotationArray } from "@/local_data";
import { createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

// Define the initial state
const initialState =
{
    ActiveObject: LivingroomAnnotationArray[0],
    floor: {
        texture: "http://admin.interiorsparkle.com/media/model/DSC02619_Glacier.jpg",
    },
    wall_tile: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg",
    },
    cabinate: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg",
    },
    cupboard_top: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg",
    },
};


export const Kitchen_1_Slice = createSlice({
    name: 'Kitchen_1_Slice',
    initialState,
    reducers: {
        updateKitchen_1_Slice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetKitchen_1_Slice: () => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to kitchen slice
const Kitchen_1_Parameter = undoable(Kitchen_1_Slice.reducer);

// Action creators are generated for each case reducer function
export const { updateKitchen_1_Slice, resetKitchen_1_Slice } = Kitchen_1_Slice.actions

export default Kitchen_1_Parameter;