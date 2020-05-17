import * as React from "react";

import Home from "./Home";
import Storch from "./Storch";

import squeaking from "../assets/squeaking.mp3";
import momo from "../assets/momo.jpg";
import parents from "../assets/parents.jpg";
import time from "../assets/time.jpg";

const App: React.FC = () => {
    const audio = React.createRef<HTMLAudioElement>();
    const [showStorch, setShowStorch] = React.useState<boolean>(true);

    const setWindowHeight = (): void => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    React.useEffect(() => {
        // Avoid 100vh not respecting URL bar on mobile browsers
        window.addEventListener("resize", setWindowHeight);
        return (): void => {
            window.removeEventListener("resize", setWindowHeight);
        };
    }, []);

    React.useEffect(() => {
        // Force browser to preload images
        const imgList = [momo, parents, time];
        imgList.forEach((image) => (new Image().src = image));
    }, []);

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
        <main className="full-height w-screen px-6 relative overflow-hidden bg-blue-100">
            {showStorch ? (
                <Storch />
            ) : (
                <div className="h-full flex justify-center items-center">
                    <Home momo={momo} parents={parents} time={time} />
                </div>
            )}
            <audio ref={audio} src={squeaking} hidden autoPlay />
        </main>
    );
};

export default App;
