import React from "react"
/*
import styled  from 'styled-components';
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUserCircle} from '@fortawesome/free-solid-svg-icons';
import logo from "../static/images/logo_small.png";
import styled from "styled-components";

import Menu from "../config/RouteMenu";

import "../static/css/headerComponent.css";
import {Link} from "react-router-dom";


const Logo = styled.img `
    width: 30%;
`




const HeaderComponent =()=>{
    return (
        <div className="header">
            <div className="header__layout">
                <div className="layout__contact">
                    <div><Logo src={logo} alt="annuaire 237"/></div>
                </div>
                <div className="layout__login">
                    <ul className="navmenu">
                        <li><Link to={Menu.home}>Explorer</Link>
                            <ul>
                                <li><Link to={Menu.about}>A propos</Link></li>
                                <li><Link to={Menu.directories}>L'annuaire</Link></li>
                                <li><Link to={Menu.jobs}>Offres d'emplois</Link></li>
                                <li><Link to={Menu.enterprise}>Entreprises</Link></li>
                                <li><Link to={Menu.event}>Evènements</Link> </li>
                            </ul>
                        </li>
                        <li><Link to={Menu.cart}>Panier</Link></li>
                        <li><Link to={Menu.help}> Aide ?</Link> </li>
                        <li><Link to={Menu.blog}>Blog</Link></li>
                    </ul>
                    <div className="loginnavbar">
                        <div className="avatar">
                            <ul className="avatar_login">
                               <li>
                                   <FontAwesomeIcon icon={faUserCircle}/>
                                   <ul className="menuconnexion">
                                       <li>Connexion</li>
                                       <li><Link to={Menu.register}>Inscription</Link></li>
                                   </ul>
                               </li>
                            </ul>
                        </div>
                        <div><Link to={Menu.publish}><button className="add_button">Publier <FontAwesomeIcon icon={faPlus}/> </button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderComponent;