import React from "react";
import './MiniLising.css';
import { Link  } from "react-router-dom";

function MiniLising({title, image, link}){

    return(
        <>
            <Link
            to={link} 
            class="Minilising">
                <img class="Minilising-img" src={image} alt={title}/>
                <span class="Minilising-title"> {title}</span>
            </Link>

        </> 
    );
}

export default MiniLising;