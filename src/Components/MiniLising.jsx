import React from "react";
import './MiniLising.css';
import { useNavigate } from "react-router-dom";

function MiniLising({title, image, link}){

    return(
        <>
            <button class="Minilising"
                onClick={() => navigate(link)}>
                <img class="Minilising-img" src={image} alt={title}/>
                <span class="Minilising-title"> {title}</span>
            </button>

        </> 
    );
}

export default MiniLising;