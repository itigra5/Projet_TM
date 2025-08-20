import React from "react";
import './InfoProfil.css';

function InfoProfil({name, city, pp, stars, description }){
    return(
        <>
        <div id="info_profil">
            <img class="profil_picture" src={pp} alt={`image of ${name}`} />
            <div class="info_profile_infos">
                <p class="pseudo">{name}</p>
                <p class="city">{city}</p>
                {/* add les etoiles, à voir comment... */}
                <p class="stars">Etoile etioile etoile</p>
            </div>
            <p class="description">{description}</p>
        </div>
        </>
    );
}


export default InfoProfil;