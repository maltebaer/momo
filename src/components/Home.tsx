import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import Back from "./Back";
import Front from "./Front";

interface HomeProps {
    momo: string;
    parents: string;
    time: string;
}

export type BackContent = "parents" | "specs" | "time" | null;

const Home: React.FC<HomeProps> = (props) => {
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
                    <div className="p-6 bg-teal-600 w-64">
                        <h3>Name</h3>
                        <p className="sub-text">Hugo Lovis Bär</p>
                        <h3 className="pt-2">Geburtsdatum</h3>
                        <p className="sub-text">04. Juni 2020</p>
                        <h3 className="pt-2">Uhrzeit</h3>
                        <p className="sub-text">17:24 Uhr</p>
                        <h3 className="pt-2">Größe</h3>
                        <p className="sub-text">53 cm</p>
                        <h3 className="pt-2">Gewicht</h3>
                        <p className="sub-text">4325 g</p>
                    </div>
                );
            case "parents":
                return <img src={props.parents} alt="Steffi und Malte" />;
            case "time":
                return <img src={props.time} alt="Pow" />;

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
                <Front handleTurn={handleTurn} momo={props.momo} />
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
