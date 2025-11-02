import './Categoriesort.css';
import { Link } from 'react-router-dom';

function CatSection({ titre, lien, image, id }) {
  return (
    <Link to={lien} className="ClassSort" id={id}>
      
      <img className="cat_img" src={image} alt={`image de ${titre}`} />

      
      <div className="cat_title">{titre}</div>
    </Link>
  );
}

export default CatSection;
