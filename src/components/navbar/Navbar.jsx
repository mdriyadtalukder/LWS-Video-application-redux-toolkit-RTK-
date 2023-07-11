import React, { useRef } from 'react';
import img from '../../assets/lws.svg';
import img2 from '../../assets/search.svg';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../rtk/features/filter/filterSice';

const Navbar = () => {
    const text = useRef('');
    const match = useMatch('/');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searche = (e) => {
        e.preventDefault();
        dispatch(searched(text.current.value));
        if (!match) {
            navigate('/');
        }
        e.target.reset();

    }
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >

                <Link to="/">
                    <img
                        className="h-10"
                        src={img}
                        alt="Learn with Sumit"
                    />
                </Link >
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    <form onSubmit={searche}>
                        <input
                            ref={text}
                            className="outline-none border-none mr-2"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                    </form>
                    <img
                        className="inline h-4 cursor-pointer"
                        src={img2}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;