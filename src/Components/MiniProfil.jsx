import React from "react";
import './scrolling.css'


function MiniProfil({pp, name, city}){
    return(
        <>
        <div class="MiniProfil">
            <img class="MiniProfilPicture" src={pp} alt={`image of ${name}`} />
            <p class="MiniProfilName">{name}</p>
            <p class="MiniProfilCity">{city}</p>
        </div>
        </>
    );
}

export default MiniProfil;