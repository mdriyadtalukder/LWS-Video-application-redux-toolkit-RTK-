import { configureStore } from '@reduxjs/toolkit';
// import videosSlice from '../rtk/features/videos/videosSlice';
import videosReducer from '../rtk/features/videos/videosSlice';
// import tagsSlice from '../rtk/features/tags/tagsSlice';
import tagsReducer from '../rtk/features/tags/tagsSlice';
// import videoSlice from '../rtk/features/video/videoSlice';
import videoReducer from '../rtk/features/video/videoSlice';
import relatedVideoSlice from '../rtk/features/relatedVideo/relatedVideoSlice';
import filterSice from '../rtk/features/filter/filterSice';
export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
        relatedVideo: relatedVideoSlice,
        filters:filterSice,
    }

})