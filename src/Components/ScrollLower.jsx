import React from "react";
import MiniProfil from "./MiniProfil";
import myData from '../Data.json';


function ScrollLower({desc}){
    const a = 1;
    return(
        <>
            <div class="ScrollLower">
                <div className="profil">
                        <MiniProfil name={myData.user[a].name} city={myData.user[a].city} pp={myData.user[a].prifil_picture}/>  
                    <div class="ProfilStars">
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                    </div>  
                </div>
                <p class="scrollDesc">{desc}</p>
                <button 
                    class="ingredients"
                    // onClick={toggleingredients}
                >
                 Afficher les ingredients \/ \/ \/   
                </button>

            </div>
        </>
    );
}

export default ScrollLower;