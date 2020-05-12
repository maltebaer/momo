import * as React from "react";

import {BackContent} from "./Home";

interface ButtonProps {
    id: BackContent;
    handleTurn(side: BackContent): void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const renderIcon = (): JSX.Element => {
        switch (props.id) {
            case "specs":
                return <div className="icon card" />;

            case "parents":
                return <div className="icon card triangle" />;

            case "time":
                return <div className="icon card pentagon" />;

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
