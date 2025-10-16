import React from "react";
import InfoProfil from "../Components/InfoProfil";
import myData from "../Data.json";
import "../Components/InfoProfil.css";

function Profile() {
  const a = 4; // index utilisateur à afficher
  const u = myData.user[a];

  return (
    <>
      <InfoProfil
        name={u.name}
        city={u.city}
        pp={u.profil_picture}      // <— vérifie l’orthographe de la clé
        description={u.description}
        followers={u.followers}
        stars={u.stars}
      />

      <h2 className="creations_title">Mes créations</h2>
      
      
    </>
  );
}

export default Profile;