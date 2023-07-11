import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTag, selectTag } from '../../rtk/features/filter/filterSice';

const Tag = ({ title }) => {
    const dispatch = useDispatch();
    const { tags} = useSelector((state) => state.filters);
    const isSelected = tags.includes(title) ? true : false;
    const toggles = () => {
        if (isSelected) {
            dispatch(removeTag(title));
        }
        else {
            dispatch(selectTag(title))
        }
    }
    return (

        <div
            onClick={toggles} className={`${isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}  px-4 py-1 rounded-full cursor-pointer`}
        >
            {title}
        </div>


    );
};

export default Tag;