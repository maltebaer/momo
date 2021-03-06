import * as React from "react";

interface BackProps {
    onClose(): void;

    children: React.ReactNode;
}

const Back: React.FC<BackProps> = (props) => {
    return (
        <div className="relative card-border">
            <div className="absolute p-4 top-0 right-0 z-10">
                <button onClick={props.onClose}>
                    <div className="w-5 h-5 close bg-blue-100" />
                </button>
            </div>
            <div className="rounded-sm overflow-hidden shadow-xl">
                {props.children}
            </div>
        </div>
    );
};

export default Back;
