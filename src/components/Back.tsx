import * as React from "react";

import closeUrl from "../assets/close.svg";

interface BackProps {
    onClose(): void;

    children: React.ReactNode;
}

const Back: React.FC<BackProps> = (props) => {
    return (
        <div className="relative card border mx-auto max-w-md">
            <div className="absolute p-4 top-0 right-0 z-10">
                <button className="text-white" onClick={props.onClose}>
                    <img className="w-5 h-5" src={closeUrl} />
                </button>
            </div>
            <div className="rounded-sm overflow-hidden">{props.children}</div>
        </div>
    );
};

export default Back;
