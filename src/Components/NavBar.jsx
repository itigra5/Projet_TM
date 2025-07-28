import './Layout.css'
import { NavLink } from 'react-router-dom';


function NavBar(){

    return(
        // j'utilise NavNavLink car il fonction avec la propriété active (pour le petit trait) --> A voir pk
         <div id="NavBar">
            <NavLink to="/"   
                className="itemNavbar" 
                title="Home">
                <i class="fas fa-home"></i>
            </NavLink>

            <NavLink
                to="/Search_1" 
                className="itemNavbar" 
                title="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>

            <NavLink 
                to="/Add" 
                className="itemNavbar" 
                title="Add">
                <i class="fa-solid fa-plus"></i>
            </NavLink>

            <NavLink 
                to="/Profil" 
                className="itemNavbar" 
                title="Profil">
                <i class="fa-solid fa-user"></i>
            </NavLink>

            <NavLink 
                to="/Cart" 
                className="itemNavbar"  
                title="Cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
        </div>
    )

}

export default NavBar;