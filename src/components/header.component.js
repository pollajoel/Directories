import React from "react"
/*
import styled  from 'styled-components';
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUserCircle} from '@fortawesome/free-solid-svg-icons';


import "../static/css/headerComponent.css";
const HeaderComponent =()=>{
    return (
        <div className="header">
            <div className="header__layout">
                <div className="layout__contact">
                    <div>Lien</div>
                    <div>Lien</div>
                    <div>Lien</div>
                    <div>Lien</div>
                </div>
                <div className="layout__login">
                    <ul className="navmenu">
                        <li>Explorer
                            <ul>
                                <li>Nos annonces</li>
                                <li>Nos annonces</li>
                                <li>Nos annonces</li>
                                <li>Nos annonces</li>
                                <li>Nos annonces</li>
                            </ul>
                        </li>
                        <li>Aide ?</li>
                        <li>Blog</li>
                        <li>Compétences</li>
                    </ul>
                    <div className="loginnavbar">
                        <div className="avatar">
                            <ul className="avatar_login">
                               <li>
                                   <FontAwesomeIcon icon={faUserCircle}/>
                                   <ul className="menuconnexion">
                                       <li>Connexion</li>
                                       <li>Inscription</li>
                                   </ul>
                               </li>
                            </ul>
                        </div>
                        <div> <button className="add_button">Publier <FontAwesomeIcon icon={faPlus}/> </button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderComponent;