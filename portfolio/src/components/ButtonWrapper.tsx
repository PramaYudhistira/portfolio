"use client";

import React from "react";
import Button from "./Button";


const ButtonWrapper: React.FC = () => {
    const handleClicks = () => {
        alert("Button clicked!");
    };
    
    return (

        <Button label="Click me" onClick={handleClicks} />

    );
}

export default ButtonWrapper;
