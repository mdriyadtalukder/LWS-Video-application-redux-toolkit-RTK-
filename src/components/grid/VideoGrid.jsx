import React from 'react';
import VideoGridItem from './VideoGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideos } from '../../rtk/features/videos/videosSlice';


const VideoGrid = () => {
    const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
    const { tags, searches } = useSelector((state) => state.filters);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideos({ tags, searches }));
    }, [dispatch,tags,searches]);
    let content;
    if (isLoading)
        content = <h1>Loading...</h1>
    if (!isLoading && isError)
        content = <h1>{error}</h1>
    if (!isLoading && !isError && videos?.length > 0)
        content = videos.map((video) => <VideoGridItem video={video} key={video.id}></VideoGridItem>)
    if (!isLoading && !isError && videos?.length === 0)
        content = <h1>No Videos Find...</h1>
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;