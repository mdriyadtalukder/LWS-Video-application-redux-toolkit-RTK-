import React, { useEffect } from 'react';
import RelatedVideo from './RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideo } from '../../rtk/features/relatedVideo/relatedVideoSlice';

const RelatedVideos = ({ id, tags }) => {
    const { relatedVideo, isLoading, isError, error } = useSelector((state) => state.relatedVideo);
    console.log(relatedVideo);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedVideo({ tags, id }))
    }, [dispatch, tags, id])
    let content;
    if (isLoading)
        content = <h1>Loading...</h1>
    if (!isLoading && isError)
        content = <h1>{error}</h1>
    if (!isLoading && !isError && relatedVideo?.length > 0)
        content = relatedVideo.map((video) => <RelatedVideo video={video} key={video.id}></RelatedVideo>)
    if (!isLoading && !isError && relatedVideo?.length === 0)
        content = <h1>No Videos Find...</h1>
    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {content}
        </div>
    );
};

export default RelatedVideos;