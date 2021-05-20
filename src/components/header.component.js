import React from "react"
import styled  from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt,faCoffee} from '@fortawesome/free-solid-svg-icons';




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








const HeaderComponent =()=>{
    return (

        <Header>
            <Layout>
                <ContainLayout><FontAwesomeIcon icon={faCoffee} size="xs" /></ContainLayout>
                <ContainLayout>In</ContainLayout>
                <ContainLayout> </ContainLayout>
                <ContainLayout>in</ContainLayout>
                <ContainLayout> <FontAwesomeIcon icon={faPhoneAlt} />+33 06 30 99 30 84</ContainLayout>
                <ContainLayout> <FontAwesomeIcon icon={faEnvelope}/>info@vitrinrAfricaine.be</ContainLayout>
            </Layout>

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