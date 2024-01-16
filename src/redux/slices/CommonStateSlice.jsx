import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    currentModelRef: null,
    SelctFilterData: {},
    sortingParameter:"sort=&is_most_popular=&is_new="
};


export const CommonStateSlice = createSlice({
    name: 'CommonStateSlice',
    initialState,
    reducers: {
        updateCommonStateSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
})

export const { updateCommonStateSlice } = CommonStateSlice.actions
export default CommonStateSlice.reducer;