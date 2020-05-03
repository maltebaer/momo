import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import {BackContent} from "./Home";

import Button from "./Button";

import momoUrl from "../assets/hugo-steffi.jpg";

interface FrontProps {
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
            className="mx-auto max-w-lg"
            onMouseMove={({clientX: x, clientY: y}): void =>
                set({xy: calc(x, y)})
            }
        >
            <div className="relative flex justify-between">
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
            <div className="px-6">
                <img
                    className="-mt-8 object-cover shadow-md"
                    src={momoUrl}
                    alt="Momo"
                />
            </div>
            <div className="-mt-10 flex justify-between items-end">
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
        <div className="card bg-blue-200 p-2">
            <h2 className="text-shadow text-xl text-white font-bold">
                Hugo Rakete Bär
            </h2>
            <div className="text-gray-800 text-right font-semibold">
                4. Juni 2020
            </div>
        </div>
    );
};
