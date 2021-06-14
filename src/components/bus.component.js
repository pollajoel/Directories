import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Container = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:#323f58;
    padding: 42px 0px 22px 0px;
`
const Col = styled.div ``

const Containerlayout = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`

const Title = styled.div`
    width: 100%;
    text-align: right;
    padding-right: 17%;
    color:#fff;
    cursor: pointer;
`

const Busbutton = styled.button `
    height: 78px;
    width: 300px;
    font-size: 23px;
    font-weight: 0;
    margin-right: 11px;
    cursor: pointer;
    background-color:#fff;
    border: 0px;
    border-radius: 16px;
    &:hover{
        background-color: #dcdcdc;
    }
    
`


const Bus = ()=>{
    return(
    <Container>
        <Containerlayout>
        <Col>
        <Busbutton>
                <span> Nos trajets en bus </span> 
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Busbutton>
            <Busbutton>
                <span> Paris </span> 
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                <span> Bruxelles  </span>
                <span> 13 e    </span>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Busbutton>
            <Busbutton>
            <span> Paris </span> 
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                <span> Bruxelles  </span>
                <span> 13 e    </span>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Busbutton>
        </Col>
        <Title>Nos tops trajets</Title>
        </Containerlayout>
    </Container>

    );
}


export default Bus;