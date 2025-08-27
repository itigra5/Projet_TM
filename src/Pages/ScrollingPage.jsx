import React from "react";
import ScrollLower from "../Components/ScrollLower";
import ScrollUpper from "../Components/ScrollUpper";


function Scrolling(){
    return(
        <>
        <ScrollUpper> 
                <img class="scrollImg" src="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" alt="je sais pas" />
                <img class="scrollImg" src="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" alt="je sais pas" />
                <img class="scrollImg" src="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" alt="je sais pas" />
        </ScrollUpper>
        <ScrollLower desc="Exelents mufins tres tres bon miam"/>
        </>
    );
}

export default Scrolling;