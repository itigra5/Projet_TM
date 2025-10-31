import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Connexion.css";

export default function Connexion() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion :", form);
    // Ici tu feras la vérification via ton backend
    navigate("/"); // redirige vers accueil ou profil après connexion
  };

  return (
  <div className="login_page fixed-page">
    <div className="auth_container">
      <h1 className="login_logo">YUCREA</h1>

      <form className="login_form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login_btn">
          Se connecter
        </button>
      </form>

      <p className="no_account">
        Pas encore de compte ?{" "}
        <span className="link_text" onClick={() => navigate("/inscription")}>
          Créer un compte
        </span>
      </p>
    </div> 
  </div>   
);
}