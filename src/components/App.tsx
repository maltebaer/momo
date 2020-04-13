import * as React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import Card from "./Card";
import Parents from "./Parents";

const App: React.FC = () => {
    return (
        <div className="bg-blue-100">
            <div className="px-4 h-screen flex flex-col justify-center">
                <Switch>
                    <Route path="/parents">
                        <Card>
                            <Parents />
                        </Card>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
