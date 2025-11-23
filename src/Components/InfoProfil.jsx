import React, { useState, useEffect } from "react";
import "./InfoProfil.css";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";



function InfoProfil({ name, city, pp, stars, followers, description }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers ?? 0);

  const { id } = useParams();
  const { userId } = useAuth();


  useEffect(() => {
  setFollowersCount(followers ?? 0);

  async function checkFollow() {
   
    // Si c'est notre compte
      if (parseInt(userId) === parseInt(id)) {
        setIsFollowing(null);
        return;
      };
      
      try {
        const res = await fetch(`/user/followers/check/${id}/${userId}`);
        const data = await res.json();
        console.log("il est follow ? en fr : ", data.isFollowing, "et br :", isFollowing)
        setIsFollowing(data.isFollowing);
  }catch(err){
    console.log('Erreur :', err)
  }
  }

  checkFollow();
}, [followers, id]);

// Pour s'abbonner
  async function FollowUser() {
        try{
          const res = await fetch(`/user/followers/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
     body: JSON.stringify({
    userId: userId
  }),
});
    const data = await res.json();
    console.log("Réponse du serveur :", data);

        }catch(err){
          console.error('Erreur :', err);         
        }
      };

  async function UnfollowUser() {
  try {
    const res = await fetch(`/user/followers/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId })
    });

    const data = await res.json();
    console.log("Unfollow :", data);

  } catch (err) {
    console.error("Erreur :", err);
  }
}

  

// Changer de front quand on s'abbonne
  const handleFollow = () => {
  setIsFollowing((prev) => {
    const newState = !prev;
    setFollowersCount((c) => (newState ? c + 1 : c - 1));
    return newState;
  });
};

  // Ce qui se passe quand on clique
    const handleClickFollow = async () => {
      if (isFollowing){
    handleFollow(); 
    await UnfollowUser(); 
      }
      else{
        handleFollow();
        await FollowUser();
      }
  };

  return (
    <div className="profile_wrapper">
      <div className="profile_header">
        <img className="profil_picture" src={pp} alt={`Photo de ${name}`} />

        
        <div className="identity">
          <h2 className="pseudo">{name}</h2>
          <p className="city">{city}</p>
          <p className="stars">{stars}</p>
        </div>

       
        <div className="follow_inline">
          <span className="followers_count">{followersCount} followers</span>
          {isFollowing !== null && (
          <button
            className={`follow_btn ${isFollowing ? "following" : ""}`}
            onClick={handleClickFollow}
          >
            {isFollowing ? "Abonné(e)" : "Suivre"}
          </button>
          )}
        </div>
      </div>

      
      <p className="description">{description}</p>
    </div>
  );
}

export default InfoProfil;