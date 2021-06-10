import React from "react";
import styled from "styled-components";
import List from '../static/images/list.png';

const Container = styled.div `
    background-color:#323f58;
    width:100%;
    height: 300px;
    display: flex;
    padding: 35px;
`


const Col = styled.div `
    width: 25%;

`

const Widgets= styled.ul `

    list-style: none;
    color: #fff;
`

const Menu = styled.li `
    list-style-image:url(${props=>props.puce})
`


const Footer = ()=>{

    //const today = new Date();

    return(<>
        <Container>
            <Col>
                <Widgets>
                <Menu puce={List}>ccccccccc</Menu>
                <Menu puce={List}>ccccccccc</Menu>
                <Menu puce={List}>ccccccccc</Menu>
                <Menu puce={List}>ccccccccc</Menu>
                </Widgets>
            </Col>
            <Col>
             <Widgets>
             <Menu puce={List}>ccccccccc</Menu>
             <Menu puce={List}>ccccccccc</Menu>
             <Menu puce={List}>ccccccccc</Menu>
            </Widgets>
            </Col>
            <Col>
            <Widgets>
            <Menu puce={List}>ccccccccc</Menu>
            <Menu puce={List}>ccccccccc</Menu>
            <Menu puce={List}>ccccccccc</Menu>
            </Widgets>
            </Col>
            <Col>
            <Widgets>
                <Menu puce={List}>XXXXXXXX</Menu>
                <Menu puce={List}>ccccccccc</Menu>
                <Menu puce={List}>ccccccccccc</Menu>
            </Widgets>
            </Col>
        </Container>
    </>)
}



export default Footer;