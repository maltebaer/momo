import * as React from "react";

import momoUrl from "../assets/hugo-steffi.jpg";
import parentsUrl from "../assets/hugo-steffi-2.jpg";

import Card from "./Card";
import Button from "./Button";

const Name: React.FC = () => {
    return (
        <div className="card py-2">
            <h2 className="text-xl text-blue-800 font-bold">Hugo Lovis Bär</h2>
            <div className="text-gray-800 text-right font-semibold">
                4. Juni 2020
            </div>
        </div>
    );
};

interface FrontProps {
    handleTurn(content: BackContent): void;
}

const Front: React.FC<FrontProps> = (props) => {
    return (
        <div className="mx-auto max-w-lg">
            <div className="relative flex justify-between">
                <Button id="specs" handleTurn={props.handleTurn} />
                <Button id="parents" handleTurn={props.handleTurn} />
            </div>
            <div className="px-6">
                <img
                    className="-mt-8 object-cover shadow-md"
                    src={momoUrl}
                    alt="Hugo"
                />
            </div>
            <div className="-mt-10 flex justify-between items-end">
                <Button id="time" handleTurn={props.handleTurn} />
                <Name />
            </div>
        </div>
    );
};

export type BackContent = "parents" | "specs" | "time" | null;

const Home: React.FC = () => {
    const [back, setBack] = React.useState<BackContent>(null);

    const handleTurn = (content: BackContent): void => {
        setBack(content);
    };

    const handleClose = (): void => {
        setBack(null);
    };

    const renderBack = (): JSX.Element => {
        switch (back) {
            case "parents":
                return <img src={parentsUrl} alt="Steffi und Malte" />;
            case "specs":
                return <div>Specs</div>;
            case "time":
                return <div>Time</div>;

            default:
                return null;
        }
    };

    return back ? (
        <Card onClose={handleClose}>{renderBack()}</Card>
    ) : (
        <Front handleTurn={handleTurn} />
    );
};

export default Home;
