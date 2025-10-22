import React from "react";
import InfoProfil from "../Components/InfoProfil";
import myData from "../Data.json";
import "../Components/InfoProfil.css";

function Profile() {
  const a = 4; 
  const u = myData.user[a];
  const casevide = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <InfoProfil
        name={u.name}
        city={u.city}
        pp={u.profil_picture}     
        description={u.description}
        followers={u.followers}
        stars={u.stars}
      />

      <h2 className="creations_title">Mes créations</h2>
      
      {/* --- Grille avec cases vides --- */}
      <div className="creations_grid">
        {casevide.map((n) => (
          <div className="creation_card" key={n}>
            <div className="creation_thumb empty" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;