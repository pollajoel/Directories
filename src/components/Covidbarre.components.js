import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';



const Barre = styled.div `
   background-color:#dcdcdc;
   width:100%;
   height:70px;
   display: flex;
   justify-content: center;

` 

const Specialtext = styled.span `
  color: #34489f;
  cursor:pointer;
`


const CovidBarre = ()=>{
    return(<Barre>
        <p>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            Les bus Wakawakacar sont de retour ! <Specialtext>En savoir plus</Specialtext> | Coronavirus : retrouvez les infos sur la situation sur notre <Specialtext>FAQ</Specialtext>.
        </p>
    </Barre>)
}


export default  CovidBarre;