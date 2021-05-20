import React from "react"
import styled ,{css} from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';




const Header =  styled.div `
    
    display:flex;
    flex-direction: columns;
    width:100%;
    padding:0px 5% 0px 5%;
    align-items:center;
    background-color:#000;
    color:#fff;
`

const Layout = styled.div `
    flex-direction: row;
    display: flex;
    width:50%;
    height:30px;
`

const ContainLayout = styled.div `
     width:auto%;
     border-top:0px;
     border-bottom:1px solid red;
     border-left:1px solid red;
     border-right:1px solid red;
     padding: 0px 2px 0px 2px;
     cursor:pointer;
     &:hover{
        background-color:red;
     }
`


const Languages = styled.ul `
    list-style: none;
    position: relative;
    top: -16px;
    left: -30px;
    z-index:1;
`

const LanguageLi  = styled.li `
    width:100%
`





const HeaderComponent =()=>{
    return (
        //-- header component start
        <Header>
            <Layout>
                <ContainLayout><FontAwesomeIcon icon="coffee" size="xs" /></ContainLayout>
                <ContainLayout>In</ContainLayout>
                <ContainLayout> </ContainLayout>
                <ContainLayout>in</ContainLayout>
                <ContainLayout> <FontAwesomeIcon icon={faPhoneAlt} />+33 06 30 99 30 84</ContainLayout>
                <ContainLayout> <FontAwesomeIcon icon={faEnvelope}/>info@vitrinrAfricaine.be</ContainLayout>
            </Layout>

            //Login and connexion
            <Layout>
                <ContainLayout>
                    <ul>
                        <li>Francçais
                            <ul>
                                <li>Français</li>
                                <li>Anglais</li>
                            </ul>
                        </li>
                    </ul>
                </ContainLayout>
                <ContainLayout>in</ContainLayout>
                <ContainLayout>in</ContainLayout>
                <ContainLayout>in</ContainLayout>
            </Layout>


        </Header>
        //En header Component

    )
}


export default HeaderComponent;