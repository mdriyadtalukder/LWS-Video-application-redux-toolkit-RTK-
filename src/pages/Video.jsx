import React from 'react';
import Player from '../components/videoDescription/Player';
import VideoDescription from '../components/videoDescription/VideoDescription';
import RelatedVideos from '../components/list/RelatedVideos';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideo } from '../rtk/features/video/videoSlice';

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch]);

  let content;
  if (isLoading)
    content = <h1>Loading...</h1>
  if (!isLoading && isError)
    content = <h1>{error}</h1>
  if (!isLoading && !isError && video?.id)
    content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
      <div class="col-span-full w-full space-y-8 lg:col-span-2">
        <Player link={video?.link} title={video?.title}></Player>

        <VideoDescription video={video}></VideoDescription>
      </div>

      <RelatedVideos id={video?.id} tags={video?.tags}></RelatedVideos>
    </div>
  if (!isLoading && !isError && !video?.id)
    content = <h1>No Videos Find...</h1>
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;