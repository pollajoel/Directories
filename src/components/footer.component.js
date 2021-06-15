import React, { useState } from "react";
import styled from "styled-components";
import List from '../static/images/list.png';
import { faMobile, faStreetView, faVoicemail} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Container = styled.div `
    background-color:#323f58;
    width:100%;
    height: 200px;
    display: flex;
    padding: 100px 20px 0px 20px;
    flex-wrap: wrap;
`


const Col = styled.div `
    width: 25%;

`

const Widgets= styled.ul `

    list-style: none;
    color: #fff;
`

const Menu = styled.li `
    list-style-image:url(${props=>props.puce});
    a{
        color:#fff;
        text-decoration: none;
    }


`

const Copyright = styled.div `
    width: 100%;
    background-color: #fff;
    padding: 0px 20% 0px 20%;
    p{
        width: 838px;
        text-align: justify;
    }
`


const Newsletter =  styled.form `
  display: flex;

  div{
      border: 2px solid #fff;
      border-radius: 22px;
      background-color: #fff;
  }

  input[type=submit]{
      border-top-right-radius:19px;
      border-bottom-right-radius:19px;
      background-color: #ff9e67;
      height: 52px;
      border-width: 0px;
      cursor:pointer;
      padding: 18px;
      &:hover{
          background-color: #34489f;
          color: #fff;
      }
  }

  input[type=text]{
    height: 52px;
    background-color: #fff;
    border:0px;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;
    &:focus{
        outline: none;
    }
  }

`



const Footer = ()=>{



    const [NewsFormState, SetNewsFormState]= useState({email:""})

    const SubmitForm = (e)=>{
        e.preventDefault();
        alert( NewsFormState.email);

    }

    

    return(<>
        <Container>
            <Col>
                <Widgets>
                <Menu><FontAwesomeIcon icon ={faMobile}/> +237 655 9976 53</Menu>
                <Menu><FontAwesomeIcon icon ={faVoicemail}/> teste@email.com</Menu>
                <Menu><FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon> Bruxelles le midi</Menu>
                </Widgets>
            </Col>
            <Col>
             <Widgets>
             <Menu puce={List}><Link to="/home"> Accueil</Link></Menu>
             <Menu puce={List}>A propos</Menu>
             <Menu puce={List}>Trouver un Trajet</Menu>
             <Menu puce={List}>Contact</Menu>
            </Widgets>
            </Col>
            <Col>
            <Widgets>
            <Menu puce={List}>Comment ça marche ?</Menu>
            <Menu puce={List}>Foire aux questions</Menu>
            <Menu puce={List}>Transparence des plateformes</Menu>
            <Menu puce={List}>Informations légales</Menu>
            </Widgets>
            </Col>
            <Col>
            <Widgets>
                <Newsletter onSubmit={e=>SubmitForm(e)}>
                    <div>
                        <input type="text" name="email" onChange={e=>SetNewsFormState({...NewsFormState,email:e.target.value})}/>
                        <input type="submit" value="S'inscrire"/>
                    </div>
                </Newsletter>
                <p>Je M'inscris à la newsletter</p>
            </Widgets>
            </Col>
        </Container>
        <Copyright>
            <p>wakawakacar est le premier réseau de covoiturage au monde. Plus besoin d'aller en ville pour quitter la ville : nous mettons en relation passagers et conducteurs prêts à partager leur trajet en voiture pour leur permettre d'aller partout, et sans changement.</p>
        </Copyright>
    </>)
}



export default Footer;