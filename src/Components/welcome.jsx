import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome_page fixed-page">
      <div className="welcome_box">
        <h1 className="welcome_title">
          Bienvenu(e)<br />chez <span className="welcome_brand">YUCREA</span>
        </h1>

        <div className="welcome_buttons">
          <button className="welcome_btn" onClick={() => navigate("/inscription")}>
            Créer un compte
          </button>
          <button className="welcome_btn secondary" onClick={() => navigate("/connexion")}>
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}
