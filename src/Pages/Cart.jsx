import React from "react";
import CompCart from "../Components/CompCart.jsx"
import myData from '../Data.json';
import '../Components/CompCart.css'


function Cart(){
    const a=1;
    return(
        <>
            <h1 class="Title">Mon panier</h1>
            <CompCart img="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" user={myData.user[a].name} city={myData.user[a].city} pp={myData.user[a].prifil_picture} name="Muffins très bons" quantity="3" price="2.50"/>
            <CompCart img="https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp" user={myData.user[a].name} city={myData.user[a].city} pp={myData.user[a].prifil_picture} name="Muffins très bons" quantity="3" price="2.50"/>
        </>
    )
}

export default Cart;