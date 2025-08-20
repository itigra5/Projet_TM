import './Categoriesort.css'

function CatSection({titre, lien, image, id}) {
    return(

    //Pour pouvoir mettre plein d'element wooow (je parle de ça <>)
    <>
    <button
 
        class="ClassSort"
        id={id}
        onClick = {() => window.location.href = lien}
    >
    <span>{titre}</span>
    <img class ="cat_img"src={image} alt={`image de ${titre}`}/>

    </button>
    </>
    );
}

export default CatSection;