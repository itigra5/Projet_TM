import React, { useState, useEffect } from "react";
import "./InfoProfil.css";
import { useParams } from "react-router-dom";




function InfoProfil({ name, city, pp, stars, followers, description }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers ?? 0);

  const { id } = useParams();


  useEffect(() => {
  setFollowersCount(followers ?? 0);
}, [followers]);

// Pour s'abbonner
  async function FollowUser() {
        try{
          const res = await fetch(`http://localhost:3000/user/followers/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }});

    const data = await res.json();
    console.log("Réponse du serveur :", data);

        }catch(err){
          console.error('Erreur :', err);         
        }
      }

// Changer de front quand on s'abbonne
  const handleFollow = () => {
    setIsFollowing(p => !p);
    setFollowersCount(c => (isFollowing ? c - 1 : c + 1));
  };

  // Ce qui se passe quand on cliques
    const handleClickFollow = async () => {
    handleFollow();        // change l’état local du bouton
    await FollowUser();    // envoie la requête POST au backend
  };

  return (
    <div className="profile_wrapper">
      <div className="profile_header">
        <img className="profil_picture" src={pp} alt={`Photo de ${name}`} />

        {/* Colonne milieu : nom + ville + étoiles */}
        <div className="identity">
          <h2 className="pseudo">{name}</h2>
          <p className="city">{city}</p>
          <p className="stars">{stars}</p>
        </div>

        {/* Colonne droite : followers + bouton */}
        <div className="follow_inline">
          <span className="followers_count">{followersCount} followers</span>
          <button
            className={`follow_btn ${isFollowing ? "following" : ""}`}
            onClick={handleClickFollow}
          >
            {isFollowing ? "Abonné(e)" : "Suivre"}
          </button>
        </div>
      </div>

      
      <p className="description">{description}</p>
    </div>
  );
}

export default InfoProfil;