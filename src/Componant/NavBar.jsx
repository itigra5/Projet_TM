import './NavBar.css'


function NavBar(){
    return(
        <>
            <a class="itemNavbar" title="Home"><i class="fas fa-home"></i></a>
            <a class="itemNavbar active" href="" title="Search"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a class="itemNavbar" href="" title="Add"><i class="fa-solid fa-plus"></i></a>
            <a class="itemNavbar" href="" title="Profil"><i class="fa-solid fa-user"></i></a>
            <a class="itemNavbar" href="" title="Cart"><i class="fa-solid fa-cart-shopping"></i></a>
        </>
    )

}

export default NavBar;