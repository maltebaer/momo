import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import Home from "./Home";

import cloudsUrl from "../assets/clouds.svg";
import storchUrl from "../assets/storch.gif";
import squeakingUrl from "../assets/squeaking.mp3";

const App: React.FC = () => {
    const audio = React.createRef<HTMLAudioElement>();
    const [showStorch, setShowStorch] = React.useState<boolean>(true);

    const {opacity: opacityClouds} = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {duration: 1000},
    });
    const {x: xClouds} = useSpring({
        x: 120,
        from: {x: -45},
        config: {mass: 2, tension: 1, friction: 15},
    });
    const {x: xStorch} = useSpring({
        x: -15,
        from: {x: 70},
        config: {mass: 1, tension: 2, friction: 5},
    });
    const {y: yStorch} = useSpring({
        y: -2,
        from: {y: 2},
        config: {mass: 1, tension: 10, friction: 0},
    });
    const {opacity} = useSpring({opacity: showStorch ? 0 : 1});

    React.useEffect(() => {
        setTimeout(() => {
            setShowStorch(false);
        }, 10000);
    }, []);
    React.useEffect(() => {
        setTimeout(() => {
            audio.current.pause();
        }, 9000);
    }, [audio]);

    return (
        <div className="bg-blue-100 overflow-hidden">
            <div className="px-4 h-screen flex justify-center items-center">
                {showStorch && (
                    <React.Fragment>
                        <a.div
                            style={{
                                opacity: opacityClouds,
                                transform: xClouds.interpolate(
                                    (x) =>
                                        `translate(${-10 + 0.6 * x}vw, -30vh)`,
                                ),
                            }}
                        >
                            <img
                                className="h-32 w-32"
                                src={cloudsUrl}
                                alt="Wolken"
                            />
                        </a.div>
                        <a.div
                            style={{
                                opacity: opacityClouds,
                                transform: xClouds.interpolate(
                                    (x) =>
                                        `translate(${60 + 0.4 * x}vw, -20vh)`,
                                ),
                            }}
                        >
                            <img
                                className="h-20 w-20"
                                src={cloudsUrl}
                                alt="Wolken"
                            />
                        </a.div>
                        <a.div
                            style={{
                                opacity: opacityClouds,
                                transform: xClouds.interpolate(
                                    (x) => `translate(${0.8 * x}vw, -5vh)`,
                                ),
                            }}
                        >
                            <img
                                className="h-48 w-48"
                                src={cloudsUrl}
                                alt="Wolken"
                            />
                        </a.div>
                        <a.div
                            style={{
                                opacity: opacityClouds,
                                transform: xClouds.interpolate(
                                    (x) => `translate(${10 + x}vw, 30vh)`,
                                ),
                            }}
                        >
                            <img
                                className="h-64 w-64"
                                src={cloudsUrl}
                                alt="Wolken"
                            />
                        </a.div>
                        <a.div
                            style={{
                                transform: xStorch.interpolate(
                                    (x) => `translateX(${x}vw)`,
                                ),
                            }}
                        >
                            <a.div
                                style={{
                                    transform: yStorch.interpolate(
                                        (y) => `translateY(${y}vh)`,
                                    ),
                                }}
                            >
                                <img src={storchUrl} alt="Storch Hugo" />
                            </a.div>
                        </a.div>
                    </React.Fragment>
                )}
                <a.div style={{opacity}}>
                    <Home />
                </a.div>
            </div>
            <audio ref={audio} src={squeakingUrl} hidden autoPlay />
        </div>
    );
};

export default App;
