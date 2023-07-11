import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./relatedVideoAPI";

const initialState = {
    relatedVideo: [],
    isLoading: false,
    isError: false,
    error: '',
}
export const fetchRelatedVideo = createAsyncThunk("relatedVideo/fetchRelatedVideo",
    async ({ tags, id }) => {
        const relatedVideo = await getRelatedVideo({ tags, id });
        return relatedVideo;
    })
const relatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideo = action.payload;
            })
            .addCase(fetchRelatedVideo.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.relatedVideo = [];
                state.error = action.error?.message;
            })
    }
})
export default relatedVideoSlice.reducer;