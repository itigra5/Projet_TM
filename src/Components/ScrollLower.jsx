import React from "react";
import myData from '../Data.json';
import Stars from "./Stars";

function ScrollLower({ desc }) {
  const a = 1;
  const user = myData.user[a];

  return (
    <div className="ScrollLower">
      <div className="profil">
        {/* Bloc gauche = photo + nom + ville */}
        <div className="MiniProfil">
          <img className="MiniProfilPicture" src={user.profil_picture} alt={user.name} />
          <div className="MiniProfilText">
            <p className="MiniProfilName">{user.name}</p>
            <p className="MiniProfilCity">{user.city}</p>
          </div>
        </div>

        {/* Bloc droit = étoiles */}
          <Stars count={user.stars} />
      </div>

      {/* Description du produit */}
      <p className="scrollDesc">{desc}</p>

      <button className="ingredients">
        Afficher les ingrédients \/ \/ \/
      </button>
    </div>
  );
}

export default ScrollLower;
