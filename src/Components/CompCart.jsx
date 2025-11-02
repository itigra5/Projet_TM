import React from "react";
import { Link } from "react-router-dom";
import MiniProfil from "./MiniProfil";

function CompCart({
  id,
  link,
  img,
  name,
  pp,
  user,
  quantity = 1,
  price,
  onIncrease,
  onDecrease,
  onDelete,
}) {
  // --- fonctions locales pour gérer les clics ---
  const inc = (e) => {
    e.preventDefault();
    onIncrease?.(id, quantity + 1);
  };

  const dec = (e) => {
    e.preventDefault();
    onDecrease?.(id, Math.max(1, quantity - 1));
  };

  const del = (e) => {
    e.preventDefault();
    onDelete?.(id);
  };

  return (
    <div className="CompCart">
      <Link to={link} style={{ display: "block" }}>
        <img className="CompCartImg" src={img} alt="image de couverture" />
      </Link>

      <div className="CompCartInfos">
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <span className="ComptCartName">{name}</span>
        </Link>

        <MiniProfil pp={pp} name={user} city="" />

        <span className="CompCartQuantity">Quantité : {quantity}</span>
        <span className="CompCartPrice">CHF {Number(price).toFixed(2)} .-</span>
        <span className="CompCartTotal">Total : CHF {(price * quantity).toFixed(2)}</span>
        
        {/* --- ligne des actions --- */}
        <div className="cart-actions">
          {/* boutons de quantité */}
          <div className="qty-inline">
            <button className="qty-btn" onClick={dec}>−</button>
            <div className="qty-value">{quantity}</div>
            <button className="qty-btn" onClick={inc}>+</button>
          </div>

          <span className="spacer" />

          {/* corbeille */}
          <button className="trash" onClick={del}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompCart;
