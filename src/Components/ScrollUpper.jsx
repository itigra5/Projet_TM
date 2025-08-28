import React, { children } from "react";
import './scrolling.css';

function ScrollUpper({children}) {
    return (
        <div 
            className="ScrollUpper"
        >
            <p className="ScrollTitle">Set de Cupcakes</p>
            <div className="scrollImgages">
                {children}
            </div>
            <button className="PlusCart">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-plus"></i>
            </button>
            <button className="like">
                <i className="fa-regular fa-heart"></i>
            </button>
        </div>
    );
}

export default ScrollUpper;