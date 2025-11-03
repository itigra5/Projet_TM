import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inscription.css";

export default function Inscription() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    confirm: "",
    ville: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e){
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
  // Créer le produit
        const body = {
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          password: form.password,
          ville: form.ville
        };


          console.log("Le bouton !", form)
          const res = await fetch("http://localhost:3000/auth/signin", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
          if (!res.ok) {
              throw new Error("Erreur lors de la création du compte");
          }

          const result = await res.json();
          alert("ça a marché !")


    console.log("Nouvel utilisateur :", form);
    navigate("/connexion");
  };

  return (
  <div className="signup_page fixed-page">
    <div className="auth_container">
      <h1 className="signup_logo">YUCREA</h1>

      <form className="signup_form" onSubmit={handleSubmit}>
        <input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} />
        <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
        <input name="email" placeholder="E-mail" type="email" value={form.email} onChange={handleChange} />
        <input name="password" placeholder="Mot de passe" type="password" value={form.password} onChange={handleChange} />
        <input name="confirm" placeholder="Confirmer le mot de passe" type="password" value={form.confirm} onChange={handleChange} />
        <input name="ville" placeholder="Ville" value={form.ville} onChange={handleChange} />

        <button type="submit" className="signup_btn">Créer un compte</button>
      </form>
    </div>
  </div>
);
}
