import * as React from "react";

import {useSpring, animated} from "react-spring";

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
        x: 0,
        from: {x: 80},
        config: {mass: 4, tension: 2, friction: 5},
    });
    const {y: yStorch} = useSpring({
        y: -2,
        from: {y: 2},
        config: {mass: 1, tension: 10, friction: 0},
    });

    return (
        <React.Fragment>
            <animated.img
                style={{
                    minWidth: "15vh",
                    top: 0,
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${-10 + 0.6 * x}vw)`,
                    ),
                }}
                className="absolute h-32 w-32"
                src={clouds}
                alt="Wolken"
            />
            <animated.img
                style={{
                    minWidth: "10vh",
                    top: "15vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${60 + 0.4 * x}vw)`,
                    ),
                }}
                className="absolute h-20 w-20"
                src={clouds}
                alt="Wolken"
            />
            <animated.img
                style={{
                    minWidth: "15vh",
                    top: "18vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${0.8 * x}vw)`,
                    ),
                }}
                className="absolute h-48 w-48"
                src={clouds}
                alt="Wolken"
            />
            <animated.img
                style={{
                    minWidth: "10vh",
                    bottom: "30vh",
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${-30 + 0.4 * x}vw)`,
                    ),
                }}
                className="absolute h-20 w-20"
                src={clouds}
                alt="Wolken"
            />
            <animated.img
                style={{
                    minWidth: "30vh",
                    bottom: 0,
                    opacity: opacityClouds,
                    transform: xClouds.interpolate(
                        (x) => `translateX(${10 + x}vw)`,
                    ),
                }}
                className="absolute h-64 w-64"
                src={clouds}
                alt="Wolken"
            />
            <animated.div
                style={{
                    minWidth: "40vh",
                    maxWidth: "50vh",
                    margin: "0 auto",
                    transform: xStorch.interpolate(
                        (x) => `translate(${x}vw, 32vh)`,
                    ),
                }}
            >
                <animated.img
                    style={{
                        transform: yStorch.interpolate(
                            (y) => `translateY(${y}vh)`,
                        ),
                    }}
                    src={storch}
                    alt="Storch Hugo"
                />
            </animated.div>
        </React.Fragment>
    );
};

export default Storch;
