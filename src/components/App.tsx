import * as React from "react";

import Home from "./Home";

const App: React.FC = () => {
    return (
        <div className="bg-blue-100">
            <div className="px-4 h-screen flex justify-center items-center">
                <Home />
            </div>
        </div>
    );
};

export default App;
