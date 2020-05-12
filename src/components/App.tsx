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

    React.useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);
    React.useEffect(() => {
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
        <div className="full-height bg-blue-100 overflow-hidden">
            <div className="px-6 h-full">
                {showStorch ? (
                    <Storch />
                ) : (
                    <div className="h-full flex justify-center items-center">
                        <Home momo={momo} parents={parents} time={time} />
                    </div>
                )}
            </div>
            <audio ref={audio} src={squeaking} hidden autoPlay />
        </div>
    );
};

export default App;
