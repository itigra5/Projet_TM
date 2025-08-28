import React from "react";
import './scrolling.css';

function ScrollUpper() {
    return (
        <div 
            className="ScrollUpper"
        >
            <p className="ScrollTitle">Set de Cupcakes</p>
            <div className="scrollImgages">
                <img class="scrollImg" src="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" alt="je sais pas" />
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