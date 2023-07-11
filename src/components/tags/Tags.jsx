import React from 'react';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTags } from '../../rtk/features/tags/tagsSlice';

const Tags = () => {
    const { tags, isLoading, isError, error } = useSelector((state) => state.tags);
    console.log(tags);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])
    return (
        tags.length > 0 ?
            <section>
                <div
                    className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
                >
                  {
                    tags.map((tag)=>  <Tag key={tag.id} title={tag.title}></Tag>)
                  }
                </div>
            </section>
            : null
    );
};

export default Tags;