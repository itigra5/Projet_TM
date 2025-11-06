import { useState } from "react";
import FavItem from "../Components/FavItem.jsx";          // <-- bon import
import myData from "../Data.json";
import "../Components/FavorisPage.css";

export default function FavorisPage() {
  const [favorites, setFavorites] = useState(
    myData.favorites ?? [
      {
        id: 1,
        title: "Muffins très bons",
        img: "https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp",
        seller: { name: myData.user?.[1]?.name, avatar: myData.user?.[1]?.profil_picture },
        price: 2.5,
      },
    ]
  );

  // --- état modale quantité ---
  const [showQty, setShowQty] = useState(false);
  const [qty, setQty] = useState(1);
  const [currentItem, setCurrentItem] = useState(null);

  const openQty = (item) => {
    setCurrentItem(item);
    setQty(1);
    setShowQty(true);
  };
  const closeQty = () => setShowQty(false);

  const confirmAdd = () => {
    if (!currentItem) return;
    console.log("ADD TO CART:", { id: currentItem.id, qty, price: currentItem.price });
    setShowQty(false);
  };

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="Title">Mes favoris</h1>

      <section className="fav-list">
        {favorites.map((p) => (
          <FavItem
            key={p.id}
            img={p.img}
            title={p.title}
            sellerName={p.seller?.name}
            sellerAvatar={p.seller?.avatar}
            price={p.price}
            onAdd={() => openQty(p)}                        
            onToggleFavorite={() => handleToggleFavorite(p.id)}
          />
        ))}
      </section>

      {/* ------ bouton QUANTITÉ ------ */}
      {showQty && (
        <div className="qty_modal_backdrop" onClick={closeQty}>
          <div className="qty_modal" onClick={(e) => e.stopPropagation()}>
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
              <button className="btn_cancel" onClick={closeQty}>Annuler</button>
              <button className="btn_confirm" onClick={confirmAdd}>Ajouter au panier</button>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}