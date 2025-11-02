import { useState } from "react";
import "./FavorisPage.css";

export default function FavItem({
  img, title, sellerName, sellerAvatar, price,
  onAdd, onToggleFavorite, isFavorite = true
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleToggle = () => {
    setFavorite(false);          // passe au cœur vide
    onToggleFavorite?.();        // parent supprime l’item
  };

  return (
    <article className="fav-row">
      <div className="fav-image-wrapper">
        <img src={img} alt={title} className="fav-img-portrait" />

        {/* Petit cœur en bas à droite */}
        <button className="fav-heart" onClick={handleToggle} aria-label="Retirer des favoris">
          {favorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="red" stroke="red" strokeWidth="2" width="21" height="21">
              <path d="M12 21s-6.7-4.5-9.3-8.1C.8 10.2 1.4 6.6 4.3 4.6c2.1-1.5 5-1.2 6.9.7L12 5.9l.8-.6c1.9-1.9 4.8-2.2 6.9-.7 2.9 2 3.5 5.6 1.6 8.3C18.7 16.5 12 21 12 21z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="black" strokeWidth="2" width="22" height="22">
              <path d="M12 21s-6.7-4.5-9.3-8.1C.8 10.2 1.4 6.6 4.3 4.6c2.1-1.5 5-1.2 6.9.7L12 5.9l.8-.6c1.9-1.9 4.8-2.2 6.9-.7 2.9 2 3.5 5.6 1.6 8.3C18.7 16.5 12 21 12 21z"/>
            </svg>
          )}
        </button>
      </div>

      <div className="fav-right">
        <h3 className="fav-name">{title}</h3>
        <div className="fav-seller">
          <img src={sellerAvatar} alt={sellerName} className="seller-avatar" />
          <span className="seller-name">{sellerName}</span>
        </div>
        <p className="fav-price">CHF {price.toFixed(2)}.-</p>
        <button className="btn-cart" onClick={onAdd}>Ajouter au panier</button>
      </div>
    </article>
  );
}

