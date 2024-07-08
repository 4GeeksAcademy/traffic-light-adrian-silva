import React, { useState } from "react";
//include images into your bundle
import Light from "./light";

//create your first component
const TrafficLight = () => {

    const [currentColor, setCurrentColor] = useState("red");

    function changeColor(color) {
        setCurrentColor(color);
    }

    return (
        <div className="container">
            <div className="row jutify-content-center mt-5">
                <div className="card bg-dark" style={{ width: "7rem" }}>
                    <ul className="list-group list-group-flush">
                        <Light color="red" onClick={() => changeColor("red")} currentColor={currentColor} />
                        <Light color="yellow" onClick={() => changeColor("yellow")} currentColor={currentColor} />
                        <Light color="green" onClick={() => changeColor("green")} currentColor={currentColor} />
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default TrafficLight;
