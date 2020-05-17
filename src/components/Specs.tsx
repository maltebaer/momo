import * as React from "react";

const Specs: React.FC = () => {
    return (
        <div className="p-6 sm:p-8 specs">
            <h3>Name</h3>
            <p className="sub-text">Hugo Lovis Bär</p>
            <h3 className="pt-4">Geburtsdatum</h3>
            <p className="sub-text">04. Juni 2020</p>
            <h3 className="pt-4">Uhrzeit</h3>
            <p className="sub-text">17:24 Uhr</p>
            <h3 className="pt-4">Größe</h3>
            <p className="sub-text">53 cm</p>
            <h3 className="pt-4">Gewicht</h3>
            <p className="sub-text">4325 g</p>
        </div>
    );
};

export default Specs;
