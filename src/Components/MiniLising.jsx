import React from "react";
import './Minilising.css';

function MiniLising({title, image}){

    return(
        <>
            <button className="Minilising">
                <img class="Minilising-img" src={image} alt={title}/>
                <span class="Minilising-title"> {title}</span>
            </button>

        </> 
    );
}

export default MiniLising;