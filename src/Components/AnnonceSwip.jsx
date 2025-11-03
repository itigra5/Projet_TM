import React from "react";
import ScrollUpper from "./ScrollUpper";
import ScrollLower from "./ScrollLower";

function AnnonceSwip({images, desc, profil_picture, name, city, stars, nameHigh }){
    return(
        <>
            <ScrollUpper nameHigh={nameHigh}>
                {images.map((img, index) => (
                    <img 
                    key={index}
                    class="scrollImg" 
                    src={img} 
                    alt={`image ${index + 1}`} />
                ))}
                
            </ScrollUpper> 
            <ScrollLower desc={desc} profil_picture={profil_picture} name={name} city={city} stars={stars} />
        </>
    );
}

export default AnnonceSwip;