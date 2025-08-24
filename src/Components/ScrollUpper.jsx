import React from "react";
import './scrolling.css'

function ScrollUpper(){
    return(
        <>
        <div class="ScrollUpper">
            <p class="ScrollTitle">Set de Cupcakes</p>
            <div class="scrollImgages">
                <img class="scrollImg" src="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" alt="je sais pas" />
            </div>
            <button class="PlusCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-plus"></i>
                {/* puis chamger à un vue quand coché */}
            </button>
            <button class="like">
                <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        </>
    );
}

export default ScrollUpper;