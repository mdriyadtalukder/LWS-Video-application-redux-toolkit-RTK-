import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    searches: "",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        selectTag: (state, action) => {
            state.tags.push(action.payload);
        },
        removeTag: (state, action) => {
            const selectIndex = state.tags.indexOf(action.payload);
            if (selectIndex !== -1) {
                state.tags.splice(selectIndex, 1);
            }
        },
        searched: (state, action) => {
            state.searches = action.payload;
        }
    }
})
export default filterSlice.reducer;
export const { selectTag, removeTag, searched } = filterSlice.actions;