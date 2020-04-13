import * as React from "react";
import {Link} from "react-router-dom";

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="relative card py-4">
            <div className="absolute p-4 top-0 right-0 z-10">
                <Link className="text-white" to="/">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </Link>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default Card;
