import * as React from "react";

import Home from "./Home";
import Storch from "./Storch";

import squeakingUrl from "../assets/squeaking.mp3";

const App: React.FC = () => {
    const audio = React.createRef<HTMLAudioElement>();
    const [showStorch, setShowStorch] = React.useState<boolean>(true);

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
                {showStorch ? <Storch /> : <Home />}
            </div>
            <audio ref={audio} src={squeakingUrl} hidden autoPlay />
        </div>
    );
};

export default App;
