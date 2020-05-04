import * as React from "react";
import {useSpring, animated as a} from "react-spring";

import Home from "./Home";

import squekingUrl from "../assets/squeking.mp3";

const App: React.FC = () => {
    const [showStorch, setShowStorch] = React.useState<boolean>(true);
    const {x} = useSpring({
        x: 0,
        from: {x: 90},
        config: {mass: 40, tension: 80, friction: 200},
    });
    const {y} = useSpring({
        y: -2,
        from: {y: 2},
        config: {mass: 1, tension: 10, friction: 0},
    });
    const {opacity} = useSpring({opacity: showStorch ? 0 : 1});

    React.useEffect(() => {
        setTimeout(() => setShowStorch(false), 7500);
    }, []);

    return (
        <div className="bg-blue-100">
            <div className="px-4 h-screen flex justify-center items-center">
                {showStorch && (
                    <a.div
                        style={{
                            transform: x.interpolate(
                                (x) => `translateX(${x}vw)`,
                            ),
                        }}
                    >
                        <a.div
                            className="bg-teal-700 h-32 w-32"
                            style={{
                                transform: y.interpolate(
                                    (y) => `translateY(${y}vh)`,
                                ),
                            }}
                        />
                    </a.div>
                )}
                <a.div style={{opacity}}>
                    <Home />
                </a.div>
            </div>
            <audio src={squekingUrl} hidden autoPlay />
        </div>
    );
};

export default App;
