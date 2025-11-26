import React, { useState, useEffect} from "react";
import "./scrolling.css";
import { useAuth } from "./AuthContext";



function ScrollUpper({ children, nameHigh, produitID}) {
  const [showQty, setShowQty] = useState(false);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const { userId } = useAuth();


  const openQty = () => {
    setQty(1);
    setShowQty(true);
  };
  const closeQty = () => setShowQty(false);

  async function confirmAdd (){
try{


  const data = {userId:userId, produitId:produitID, qty: qty}
  console.log("Datas : ", data)
     const res = await fetch("/panier/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (!res.ok) {
              throw new Error("Erreur lors de l'ajout de l'article");
          }
    console.log("Ajouté au panier :", qty);
    closeQty();
        }catch(err){
  console.error('Erreur :', err);
}
  };

    async function handleDeleteItem(produitId) {
    try{
      const res = await fetch(`/favoris/del/${userId}/${produitId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Erreur lors de la suppression");

    // Mets à jour l'état local
    setLiked(0)

    }catch(err){
      console.error('Erreur :', err)
    }
    };


  async function favorisAdd() {
    try{
      if (!userId || !produitID) return;

      if (liked){
        handleDeleteItem(produitID)
        return
      }

  const data = {userId:userId, produitId:produitID}
     const res = await fetch("/favoris/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (!res.ok) {
              throw new Error("Erreur lors de l'ajout de l'article");
          }
    setLiked(1)
    console.log("Ajouté au favoris :", qty);
        }catch(err){
  console.error('Erreur :', err);
}
  }

  useEffect(() => {
async function isFavoris() {
            if (!userId || !produitID) return;

            try{
            const res = await fetch(`/favoris/check/${userId}/${produitID}`);
            const data = await res.json();

            if (data.exist === 1) {
              setLiked(1)}
          }catch(err){
            console.error('Erreur :', err);
          }
        }
      isFavoris()
    }, [])
        


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
        onClick={favorisAdd}
        aria-label="Ajouter aux favoris"
      >
        <i className="fa-solid fa-heart" />
      </button>

      {/* ------ Bouton QUANTITÉ ------ */}
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