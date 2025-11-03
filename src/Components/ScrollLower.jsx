import React from "react";
import myData from '../Data.json';
import Stars from "./Stars";

function ScrollLower({ desc, profil_picture, name, city, stars }) {
  const a = 1;
  const user = myData.user[a];

  return (
    <div className="ScrollLower">
      <div className="profil">
        {/* Bloc gauche = photo + nom + ville */}
        <div className="MiniProfil">
          <img className="MiniProfilPicture" src={profil_picture} alt={name} />
          <div className="MiniProfilText">
            <p className="MiniProfilName">{name}</p>
            <p className="MiniProfilCity">{city}</p>
          </div>
        </div>

        {/* Bloc droit = étoiles */}
          <Stars count={stars} />
      </div>

      {/* Description du produit */}
      <p className="scrollDesc">{desc}</p>

    </div>
  );
}

export default ScrollLower;
