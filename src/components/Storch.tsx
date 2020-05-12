import * as React from "react";

import {useSpring, animated as a} from "react-spring";

import clouds from "../assets/clouds.svg";
import storch from "../assets/storch.gif";

const Storch: React.FC = () => {
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
        x: 40,
        from: {x: 110},
        config: {mass: 1, tension: 2, friction: 5},
    });
    const {y: yStorch} = useSpring({
        y: -2,
        from: {y: 2},
        config: {mass: 1, tension: 10, friction: 0},
    });

    return (
        <React.Fragment>
            <a.div
                style={{
                    position: "absolute",
                    top: "1vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${-10 + 0.6 * x}vw)`,
                    ),
                }}
            >
                <img
                    style={{minWidth: "15vh"}}
                    className="h-32 w-32"
                    src={clouds}
                    alt="Wolken"
                />
            </a.div>
            <a.div
                style={{
                    position: "absolute",
                    top: "15vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${60 + 0.4 * x}vw)`,
                    ),
                }}
            >
                <img
                    style={{minWidth: "10vh"}}
                    className="h-20 w-20"
                    src={clouds}
                    alt="Wolken"
                />
            </a.div>
            <a.div
                style={{
                    position: "absolute",
                    top: "20vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${0.8 * x}vw)`,
                    ),
                }}
            >
                <img
                    style={{minWidth: "20vh"}}
                    className="h-48 w-48"
                    src={clouds}
                    alt="Wolken"
                />
            </a.div>
            <a.div
                style={{
                    position: "absolute",
                    bottom: "30vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${-30 + 0.4 * x}vw)`,
                    ),
                }}
            >
                <img
                    style={{minWidth: "10vh"}}
                    className="h-20 w-20"
                    src={clouds}
                    alt="Wolken"
                />
            </a.div>
            <a.div
                style={{
                    position: "absolute",
                    bottom: "1vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${10 + x}vw)`,
                    ),
                }}
            >
                <img
                    style={{minWidth: "30vh"}}
                    className="h-64 w-64"
                    src={clouds}
                    alt="Wolken"
                />
            </a.div>
            <a.div
                style={{
                    position: "absolute",
                    top: "40vh",
                    transform: xStorch.interpolate((x) => `translateX(${x}vw)`),
                }}
            >
                <a.div
                    style={{
                        transform: yStorch.interpolate(
                            (y) => `translateY(${y}vh)`,
                        ),
                    }}
                >
                    <img
                        style={{minWidth: "40vh"}}
                        src={storch}
                        alt="Storch Hugo"
                    />
                </a.div>
            </a.div>
        </React.Fragment>
    );
};

export default Storch;
