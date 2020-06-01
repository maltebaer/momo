import * as React from "react";

const Specs: React.FC = () => {
    return (
        <div className="p-6 sm:p-8 specs bg-teal-600">
            <h3 className="sub-heading">Name</h3>
            <p className="sub-text">Michel Lovis Bär</p>
            <h3 className="sub-heading pt-4">Geburtsdatum</h3>
            <p className="sub-text">01. Juni 2020</p>
            <h3 className="sub-heading pt-4">Uhrzeit</h3>
            <p className="sub-text">08:36 Uhr</p>
            <h3 className="sub-heading pt-4">Größe</h3>
            <p className="sub-text">51 cm</p>
            <h3 className="sub-heading pt-4">Gewicht</h3>
            <p className="sub-text">3560 g</p>
        </div>
    );
};

export default Specs;
