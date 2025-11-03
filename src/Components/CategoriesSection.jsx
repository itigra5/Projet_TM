import "./Categoriesort.css";
import { Link } from "react-router-dom";


const CAT_IMG = {
  patisserie: "/images/img_patisserie_cat.png",
  couture: "/images/img_couture_cat.png",
  bijoux: "/images/img_bijoux_cat.png",
  art: "/images/img_art_cat.png",
  cuisine: "/images/img_cuisine_cat.png",
};

function CatSection({ titre, lien, id }) {
  const key = titre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const src = CAT_IMG[key] || "/images/fallback.png"; // si pas trouvé → image par défaut

  return (
    <Link to={lien} className="ClassSort" id={String(id)}>
      <img className="cat_img" src={src} alt={`image de ${titre}`} />
      <div className="cat_title">{titre}</div>
    </Link>
  );
}

export default CatSection;


