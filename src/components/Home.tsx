import * as React from "react";
import {Link} from "react-router-dom";

import imageUrl from "../assets/hugo-steffi.jpg";

const ParentsLink: React.FC = () => {
    return (
        <Link to="/parents">
            <svg fill="currentColor" viewBox="0 0 20 20" className="icon">
                <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </Link>
    );
};

const Specs: React.FC = () => (
    <button>
        <svg fill="currentColor" viewBox="0 0 20 20" className="icon">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
            ></path>
        </svg>
    </button>
);

const Time: React.FC = () => {
    return (
        <button>
            <svg fill="currentColor" viewBox="0 0 20 20" className="icon">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </button>
    );
};

const Name: React.FC = () => {
    return (
        <div className="card py-2">
            <h2 className="text-xl text-blue-800 font-bold">Hugo Lovis Bär</h2>
            <div className="text-gray-800 text-right font-semibold">
                4. Juni 2020
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className="mx-auto max-w-lg">
            <div className="relative flex justify-between">
                <Specs />
                <ParentsLink />
            </div>
            <div className="px-6">
                <img
                    className="-mt-8 object-cover shadow-md"
                    src={imageUrl}
                    alt="Hugo"
                />
            </div>
            <div className="-mt-10 flex justify-between items-end">
                <Time />
                <Name />
            </div>
        </div>
    );
};

export default Home;
