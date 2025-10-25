import React, { useState, useEffect } from "react";
import "./InfoProfil.css";

function InfoProfil({ name, city, pp, stars, followers, description }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers ?? 0);

  useEffect(() => {
  setFollowersCount(followers ?? 0);
}, [followers]);

  const handleFollow = () => {
    setIsFollowing(p => !p);
    setFollowersCount(c => (isFollowing ? c - 1 : c + 1));
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
            onClick={handleFollow}
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