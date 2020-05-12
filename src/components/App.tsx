import * as React from "react";

import Home from "./Home";
import Storch from "./Storch";

import squeaking from "../assets/squeaking.mp3";
import momo from "../assets/momo.jpg";
import parents from "../assets/parents.jpg";
import time from "../assets/time.jpg";

const App: React.FC = () => {
    const audio = React.createRef<HTMLAudioElement>();
    const [showStorch, setShowStorch] = React.useState<boolean>(false);

    React.useEffect(() => {
        const imgList = [momo, parents, time];
        imgList.forEach((image) => (new Image().src = image));
    }, []);
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setShowStorch(false);
    //     }, 10000);
    // }, []);
    React.useEffect(() => {
        setTimeout(() => {
            audio.current.pause();
        }, 9000);
    }, [audio]);

    return (
        <div className="bg-blue-100 overflow-hidden">
            <div className="px-4 h-screen flex justify-center items-center">
                {showStorch ? (
                    <Storch />
                ) : (
                    <Home momo={momo} parents={parents} time={time} />
                )}
            </div>
            <audio ref={audio} src={squeaking} hidden autoPlay />
        </div>
    );
};

export default App;
