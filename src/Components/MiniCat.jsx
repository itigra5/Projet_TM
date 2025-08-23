import React from "react";
import { Link } from "react-router-dom";
import './MiniCat.css';
import './Layout.css'




function MiniCat({name}){
    return (
        <>
        <Link class="MiniCat"
                to="/Scroll">
            <div class="ImageMiniCat">
                <p class="TitleMiniCat">{name}</p>
            </div>
        </Link> 
        </>
    );
}

export default MiniCat;