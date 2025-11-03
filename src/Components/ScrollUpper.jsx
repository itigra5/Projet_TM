import React, { useState } from "react";
import "./scrolling.css";

function ScrollUpper({ children, onAddToCart, nameHigh }) {
  const [showQty, setShowQty] = useState(false);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const openQty = () => {
    setQty(1);
    setShowQty(true);
  };
  const closeQty = () => setShowQty(false);

  const confirmAdd = () => {
    // si tu veux remonter au parent :
    if (onAddToCart) onAddToCart(qty);
    console.log("Ajouté au panier :", qty);
    setShowQty(false);
  };

  return (
    <div className="ScrollUpper">
      <p className="ScrollTitle">{nameHigh}</p>

      <div className="scrollImgages">{children}</div>

      {/* bouton panier */}
      <button className="PlusCart" onClick={openQty}>
        <i className="fa-solid fa-cart-shopping" />
        <i className="fa-solid fa-plus" />
      </button>

      {/* cœur */}
      <button
        className={`like ${liked ? "liked" : ""}`}
        onClick={() => setLiked((v) => !v)}
        aria-label="Ajouter aux favoris"
      >
        <i className="fa-solid fa-heart" />
      </button>

      {/* ------ POPUP QUANTITÉ ------ */}
      {showQty && (
        <div className="qty_modal_backdrop" onClick={closeQty}>
          <div
            className="qty_modal"
            onClick={(e) => e.stopPropagation()} /* empêche la fermeture quand on clique dedans */
          >
            <h3>Quantité</h3>

            <div className="qty_row">
              <button
                className="qty_btn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Diminuer"
              >
                −
              </button>
              <input
                className="qty_input"
                type="number"
                min="1"
                max="99"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Math.min(99, Number(e.target.value) || 1)))
                }
              />
              <button
                className="qty_btn"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                aria-label="Augmenter"
              >
                +
              </button>
            </div>

            <div className="qty_actions">
              <button className="btn_cancel" onClick={closeQty}>
                Annuler
              </button>
              <button className="btn_confirm" onClick={confirmAdd}>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default ScrollUpper;