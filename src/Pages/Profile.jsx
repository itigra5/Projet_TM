import React, { useState, useEffect } from "react";
import InfoProfil from "../Components/InfoProfil";
import myData from "../Data.json";
import "../Components/InfoProfil.css";
import { useParams } from "react-router-dom";


function Profile() {
  const [profile, setProfile] = useState([]);
  const { id } = useParams();
  const [nbrFollowers, setNbrFollowers] = useState(0);

  const a = 4; 
  const u = myData.user[a];
  const casevide = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
      async function loadProfile() {
        try {
            const res = await fetch(`http://localhost:3000/user/${id}`);
            const data = await res.json();
            setProfile(data);
          } catch (err) {
            console.error('Erreur :', err);
          }
        }

      async function CountFollowers() {
        try{
          const res = await fetch(`http://localhost:3000/user/followers/${id}`);
          console.log("res.ok :", res.ok);
          const data = await res.json();
          console.log("data reçu :", data);
          setNbrFollowers(data);
          console.log(nbrFollowers)
        } catch(err){
          console.error('Erreur :', err);
        }
      }

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

        loadProfile();
        CountFollowers()
      }, [nbrFollowers]);


  return (
    <>
      <InfoProfil
        name={profile.Nom}
        city={profile.Adresse}
        pp={profile.photodeprofile}     
        description={profile.Description}
        followers={nbrFollowers}
        // stars={u.stars}  plus tard aussi
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