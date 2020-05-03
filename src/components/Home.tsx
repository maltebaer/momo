import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import Back from "./Back";
import Front from "./Front";

import parentsUrl from "../assets/hugo-steffi-2.jpg";
import timeUrl from "../assets/time.jpg";

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
                return (
                    <div className="p-4">
                        <h3 className="text-lg">Name</h3>
                        <p>Hugo Lovis Bär</p>
                        <h3 className="text-lg">Geburtsdatum</h3>
                        <p>04. Juni 2020</p>
                        <h3 className="text-lg">Uhrzeit</h3>
                        <p>17:24 Uhr</p>
                        <h3 className="text-lg">Größe</h3>
                        <p>53 cm</p>
                        <h3 className="text-lg">Gewicht</h3>
                        <p>4325 g</p>
                    </div>
                );
            case "parents":
                return <img src={parentsUrl} alt="Steffi und Malte" />;
            case "time":
                return <img src={timeUrl} alt="Pow" />;

            default:
                return null;
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
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
                <Back onClose={handleClose}>{renderBack()}</Back>
            </a.div>
        </div>
    );
};

export default Home;
