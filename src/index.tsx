import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FC = () => {
    return <div className="welcome">Hello world!</div>;
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
