import React from "react";

const Light = (props) => {

    return (
        <button className={`${props.color}${props.color === props.currentColor ? " highlighted " : ""}`} onClick={props.onClick}></button>
    )
};

export default Light;