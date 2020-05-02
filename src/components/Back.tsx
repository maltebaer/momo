import * as React from "react";

interface BackProps {
    onClose(): void;

    children: React.ReactNode;
}

const Back: React.FC<BackProps> = (props) => {
    return (
        <div className="relative card mx-auto max-w-md py-4">
            <div className="absolute p-4 top-0 right-0 z-10">
                <button className="text-white" onClick={props.onClose}>
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
                </button>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default Back;
