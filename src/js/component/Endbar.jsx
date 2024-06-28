import React from "react";

const Endbar = (props) => {
    return (
        <div className="container-fluid bg-dark">
            <p className="text-light text-center p-5 my-auto">{props.copyright}</p>
        </div>
    );
};

export {Endbar};