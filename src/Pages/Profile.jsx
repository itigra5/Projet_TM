import React from "react";
import InfoProfil from "../Components/InfoProfil";
import myData from '../Data.json';


function Profile(){
    const a =1;
    return(
        <>
            <InfoProfil name={myData.user[a].name} city={myData.user[a].city} pp={myData.user[a].prifil_picture}description={myData.user[a].description} />      
            <h1 class="Title">Mes creations</h1>
            {/* mmettre le lising, ez  */}
        </>
    )
}

export default Profile;