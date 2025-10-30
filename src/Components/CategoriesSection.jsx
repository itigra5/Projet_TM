import './Categoriesort.css'
import { Link } from 'react-router-dom';


function CatSection({titre, lien, image, id}) {
    return(

    //Pour pouvoir mettre plein d'element wooow (je parle de ça <>)
    <>
    <Link
        to={lien}
        class="ClassSort"
        id={id}
    >
    <span>{titre}</span>
    <img class="cat_img" src={image} alt={`image de ${titre}`}/>

    </Link>
    </>
    );      
}

export default CatSection;