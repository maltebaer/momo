import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import momoUrl from "../assets/hugo-steffi.jpg";
import parentsUrl from "../assets/hugo-steffi-2.jpg";
import timeUrl from "../assets/time.jpg";

import Card from "./Card";
import Button from "./Button";

const Name: React.FC = () => {
    return (
        <div className="card py-2">
            <h2 className="text-xl text-blue-800 font-bold">Hugo Rakete Bär</h2>
            <div className="text-gray-800 text-right font-semibold">
                4. Juni 2020
            </div>
        </div>
    );
};

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

export type BackContent = "parents" | "specs" | "time" | null;

const Home: React.FC = () => {
    const [back, setBack] = React.useState<BackContent>(null);

    const {transform, opacity} = useSpring({
        opacity: back ? 1 : 0,
        transform: `perspective(600px) rotateX(${back ? 180 : 0}deg)`,
        config: {mass: 4, tension: 180, friction: 30},
    });

    const handleTurn = (content: BackContent): void => {
        setBack(content);
    };

    const handleClose = (): void => {
        setBack(null);
    };

    const renderBack = (): JSX.Element => {
        switch (back) {
            case "specs":
                return <div>Specs</div>;
            case "parents":
                return <img src={parentsUrl} alt="Steffi und Malte" />;
            case "time":
                return <img src={timeUrl} alt="Pow" />;

            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center">
            <a.div
                className="c absolute"
                style={{
                    opacity: opacity.interpolate((o: number) => 1 - o),
                    transform,
                }}
            >
                <Front handleTurn={handleTurn} />
            </a.div>
            <a.div
                className="c absolute"
                style={{
                    opacity,
                    transform: transform.interpolate(
                        (t) => `${t} rotateX(180deg)`,
                    ),
                }}
            >
                <Card onClose={handleClose}>{renderBack()}</Card>
            </a.div>
        </div>
    );
};

export default Home;
