import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "../static/images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle, faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';
import userIcon from '../static/images/user.png';


const Header = styled.div `
  background-color:${props=>props.color};
  width:100%;
  display:flex;

  padding:0px 20px 0px 20px;
`
const Firstmenu = styled.div `
  width: 50%;
`
const Secondmenu = styled.div `
width: 50%;
display: flex;
justify-content: center;
`


const Menu = styled.ul `
  display:flex;
  li{
    display:flex;
    list-style:none;
    padding-right: 12px;
    color:#24324f;
    cursor:pointer;
    font-size:16px;
      ul{
        display:${props=>props.dasboardmenu};
        transition: all 1s ease-out;
      }
    

  };
`

const Logo = styled.img `
  width:50px;
`
const Icon = styled.a `
  padding-right: 5px;
  padding-left: 8px;
`
const Usericon = styled.img `
  width: 44px;
  position: relative;
  top: -10px;
`

const Dasboardmenu = styled.ul`
  display:flex;
  flex-direction: column;
  position: absolute;
  top: 76px;
  left: 64%;
  background: #fff;
  width: 326px;
  padding-bottom: 20px;
  display:none;
}
`


const Navbar = ()=>{

  const [Menudata, SetMenudata] =useState({display:'none'})

  const openMenu = (e)=>{

    e.preventDefault();
    if( Menudata.display === "none")
      SetMenudata({display:"block"});
      else
      SetMenudata({display:"none"});
  }
  

  useEffect(()=>{},[])

  return (<Header color="#fff">
          <Firstmenu>
            <Menu>
              <li><Logo src={logo} alt="Wakawakacar"></Logo></li>
              <li>covoiturage</li>
              <li>Bus</li>
              <li>Covoiturage du quotidien</li>
            </Menu>
          </Firstmenu>
          <Secondmenu>
            <Menu dasboardmenu={Menudata.display}>
              <li><Icon><FontAwesomeIcon icon={faSearch}/></Icon>Rechercher</li>
              <li><Icon><FontAwesomeIcon icon={faPlusCircle}/></Icon>Proposer un Trajet</li>
              <li>

               
                {
                  Menudata.display==="none"?
                  (<><Usericon src={userIcon} onClick ={(e)=>openMenu(e)}/> <Icon><FontAwesomeIcon icon={faAngleUp} onClick ={(e)=>openMenu(e)}/></Icon></>)
                  :(<><Usericon src={userIcon} onClick ={(e)=>openMenu(e)}/> <Icon><FontAwesomeIcon icon={faAngleDown} onClick ={(e)=>openMenu(e)} /></Icon></>) 
               }
              

              <Dasboardmenu>
                   <li>Connexion</li>
                   <li>Inscription</li>
              </Dasboardmenu>
              </li>
            </Menu>
          </Secondmenu>

  </Header>);
}


export default Navbar;

