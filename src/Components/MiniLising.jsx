import React from "react";
import './MiniLising.css';

function MiniLising({title, image}){

    return(
        <>
            <button class="Minilising">
                <img class="Minilising-img" src={image} alt={title}/>
                <span class="Minilising-title"> {title}</span>
            </button>

        </> 
    );
}

export default MiniLising;