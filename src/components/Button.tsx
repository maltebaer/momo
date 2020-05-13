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
                return (
                    <div className="icon card flex justify-center items-center">
                        <span className="transform -rotate-45 text-white text-xs sm:text-sm">
                            Klick!
                        </span>
                    </div>
                );

            case "parents":
                return (
                    <div className="icon card octagon flex justify-center items-center">
                        <span className="transform rotate-45 text-white text-xs sm:text-sm">
                            Klick!
                        </span>
                    </div>
                );

            case "time":
                return (
                    <div className="icon card pentagon flex justify-center items-center">
                        <span
                            style={{transform: "rotate(-135deg)"}}
                            className="transform text-white text-xs sm:text-sm"
                        >
                            Klick!
                        </span>
                    </div>
                );

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
