import React from "react";
import '../styling/testing/Hourglass.css';

const Hourglass = () => {
    return (
        <div className="Hourglass-container">
            <div style={{ display: "flex" }}>
                <div className="hourglass"></div>
                <div> Test </div>
            </div>
        </div>
    );
}

export default Hourglass;