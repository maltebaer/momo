import * as React from "react";

import specsUrl from "../assets/specs.svg";
import parentsUrl from "../assets/parents.svg";
import timeUrl from "../assets/time-2.svg";

import {BackContent} from "./Home";

interface ButtonProps {
    id: BackContent;
    handleTurn(side: BackContent): void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const renderIcon = (): JSX.Element => {
        switch (props.id) {
            case "specs":
                return <img className="icon" src={specsUrl} alt="Specs" />;

            case "parents":
                return <img className="icon" src={parentsUrl} alt="Parents" />;

            case "time":
                return <img className="icon" src={timeUrl} alt="Time" />;

            default:
                return null;
        }
    };

    return (
        <button onClick={(): void => props.handleTurn(props.id)}>
            {renderIcon()}
        </button>
    );
};

export default Button;
