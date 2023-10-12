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
        texture: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/h/f/hfm_anti-skid_ec_wooden_mosaic__ceramic_tile_floor_tile_300x300_mm.jpg",
    },
    vanityTop: {
        texture: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    },
    wall: {
        texture: "https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg"
    },
    cabibate: {
        texture: "https://media.istockphoto.com/id/1415424219/photo/white-marble-with-blue-and-golden-orange-patterns.jpg?s=612x612&w=0&k=20&c=2_J_djQp7SDuSnVBsNy9CxhFDeAYNsmuqxFV1PE3V0I=",
        TopTexture: "https://media.istockphoto.com/id/1415424219/photo/white-marble-with-blue-and-golden-orange-patterns.jpg?s=612x612&w=0&k=20&c=2_J_djQp7SDuSnVBsNy9CxhFDeAYNsmuqxFV1PE3V0I=",
        BodyTexture: "https://media.istockphoto.com/id/1415424219/photo/white-marble-with-blue-and-golden-orange-patterns.jpg?s=612x612&w=0&k=20&c=2_J_djQp7SDuSnVBsNy9CxhFDeAYNsmuqxFV1PE3V0I="
    },
    door: {
        texture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlykLyQp5Ik6LXl5gQLCiNNymmlbu2MmVIXCNDuQJoeoiCX69woZ6BQ3hflMQyAYiNes4&usqp=CAU"
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