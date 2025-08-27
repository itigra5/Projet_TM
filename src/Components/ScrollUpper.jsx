import React from "react";
import { useState, useEffect } from "react";
import './scrolling.css'


// https://dev.to/rakumairu/simple-react-carousel-24m0

function ScrollUpper({children}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    return(
        <>
        <div class="ScrollUpper">
            <p class="ScrollTitle">Set de Cupcakes</p>
            <div class="scrollImgages" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {children}
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