import React from "react";
import './MiniCat.css' 




function MiniCat(name, image){
    return (
        <>
        <img src={image} alt="random photo" />
        <p>{name}</p>
    </>
    );
}

export default MiniCat;