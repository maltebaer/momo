import * as React from "react";

import {BackContent} from "./Home";

import Button from "./Button";

interface FrontProps {
    momo: string;
    onHandleTurn(content: BackContent): void;
}

const Front: React.FC<FrontProps> = (props) => {
    return (
        <React.Fragment>
            <div
                style={{top: "2rem"}}
                className="relative flex justify-between"
            >
                <Button id="specs" handleTurn={props.onHandleTurn} />
                <Button id="parents" handleTurn={props.onHandleTurn} />
            </div>
            <div className="px-4">
                <div className="card">
                    <img
                        className="rounded-sm overflow-hidden"
                        src={props.momo}
                        alt="Momo"
                    />
                </div>
            </div>
            <div
                style={{top: "-3rem"}}
                className="relative flex justify-between items-end"
            >
                <Button id="time" handleTurn={props.onHandleTurn} />
                <Name />
            </div>
        </React.Fragment>
    );
};

export default Front;

const Name: React.FC = () => {
    return (
        <div className="card p-2">
            <h2>Hugo Rakete Bär</h2>
            <div className="text-gray-800 font-semibold text-right">
                4. Juni 2020
            </div>
        </div>
    );
};
