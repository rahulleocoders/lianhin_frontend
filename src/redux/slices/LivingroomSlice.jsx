import { LivingroomAnnotationArray } from "@/local_data";
import { createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

// Define the initial state
const initialState =
{
    ActiveObject: LivingroomAnnotationArray[0],
    floor: {
        texture: "http://admin.interiorsparkle.com/media/model/DSC02837_Raffica_PAYg1js.jpg",
        // texture: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/h/f/hfm_anti-skid_ec_wooden_mosaic__ceramic_tile_floor_tile_300x300_mm.jpg",
    },
    CoffeTable: {
        // texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
        texture: "http://admin.interiorsparkle.com/media/model/DSC02650_Striscia.jpg",
    },
    TVConsole: {
        // texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
        texture: "http://admin.interiorsparkle.com/media/model/lian_him1.png",
    },
    wall: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg",
        color: "white"
    },
    Feature_Wall: {
        texture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlykLyQp5Ik6LXl5gQLCiNNymmlbu2MmVIXCNDuQJoeoiCX69woZ6BQ3hflMQyAYiNes4&usqp=CAU"
    }
};


export const livingroomSlice = createSlice({
    name: 'livingroomSlice',
    initialState,
    reducers: {
        updatelivingroomSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetlivingroomSlice: () => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to kitchen slice
const LivingroomParameter = undoable(livingroomSlice.reducer);

// Action creators are generated for each case reducer function
export const { updatelivingroomSlice, resetlivingroomSlice } = livingroomSlice.actions

export default LivingroomParameter;