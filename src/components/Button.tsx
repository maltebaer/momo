import * as React from "react";
import {motion} from "framer-motion";

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
                    <div className="icon bg-blue-400 border-blue-600">
                        <span className="transform -rotate-45 text-white text-xs sm:text-sm">
                            Klick!
                        </span>
                    </div>
                );

            case "parents":
                return (
                    <div className="icon octagon bg-indigo-600 border-indigo-800">
                        <span className="transform rotate-45 text-white text-xs sm:text-sm">
                            Klick!
                        </span>
                    </div>
                );

            case "time":
                return (
                    <div className="icon pentagon bg-purple-500 border-purple-700">
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
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            drag
            dragConstraints={{top: 0, left: 0, bottom: 0, right: 0}}
            dragTransition={{bounceStiffness: 600, bounceDamping: 10}}
            onClick={(): void => props.handleTurn(props.id)}
        >
            {renderIcon()}
        </motion.button>
    );
};

export default Button;
