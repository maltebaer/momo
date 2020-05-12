import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import Back from "./Back";
import Front from "./Front";
import Specs from "./Specs";

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
                return <Specs />;
            case "parents":
                return <img src={props.parents} alt="Steffi und Malte" />;
            case "time":
                return <img src={props.time} alt="Pow" />;

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            {!back && (
                <a.div
                    className="animated max-w-lg"
                    style={{
                        opacity: opacity.interpolate((o: number) => 1 - o),
                        transform,
                    }}
                >
                    <Front handleTurn={handleTurn} momo={props.momo} />
                </a.div>
            )}
            {back && (
                <a.div
                    className="animated max-w-lg"
                    style={{
                        opacity,
                        transform: transform.interpolate(
                            (t) => `${t} rotateX(180deg)`,
                        ),
                    }}
                >
                    <Back onClose={handleClose}>{renderBack()}</Back>
                </a.div>
            )}
        </div>
    );
};

export default Home;
