import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import {BackContent} from "./Home";

import Button from "./Button";

interface FrontProps {
    momo: string;
    handleTurn(content: BackContent): void;
}

const Front: React.FC<FrontProps> = (props) => {
    const [position, set] = useSpring(() => ({
        xy: [0, 0],
        config: {mass: 10, tension: 550, friction: 140},
    }));

    const calc = (x: number, y: number): number[] => [
        x - window.innerWidth / 2,
        y - window.innerHeight / 2,
    ];

    const translate = (x: number, y: number): string => {
        const strength = 40;
        return `translate3d(${-x / strength}px, ${-y / strength}px, 0)`;
    };

    return (
        <div
            onMouseMove={({clientX: x, clientY: y}): void =>
                set({xy: calc(x, y)})
            }
        >
            <div
                style={{top: "2rem"}}
                className="relative flex justify-between"
            >
                <a.div
                    style={{
                        transform: position.xy.interpolate(translate),
                    }}
                >
                    <Button id="specs" handleTurn={props.handleTurn} />
                </a.div>
                <a.div
                    style={{
                        transform: position.xy.interpolate(translate),
                    }}
                >
                    <Button id="parents" handleTurn={props.handleTurn} />
                </a.div>
            </div>
            <div className="px-4">
                <img className="card" src={props.momo} alt="Momo" />
            </div>
            <div
                style={{top: "-3rem"}}
                className="relative flex justify-between items-end"
            >
                <a.div style={{transform: position.xy.interpolate(translate)}}>
                    <Button id="time" handleTurn={props.handleTurn} />
                </a.div>
                <Name />
            </div>
        </div>
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
