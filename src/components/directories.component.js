import React from "react";
import styled from "styled-components";
import About from '../static/images/apropos.jpg';


const Container = styled.div `
  width:100%;
  height:400px;
  display:flex;
  justify-content: center;
  margin: 20px 0px 20px 0px;
  
`


const ImageTols = styled.img `
  width: 40%;
`

const Title = styled.h1`
white-space: pre-line;
color: rgb(5, 71, 82);
font-size: 30px;
line-height: 1.06;
font-weight: 600;
`

const Text = styled.div `
  padding-top: 100px;
`

const AddTrip = styled.button `

background:  #34489f;
border: 0px;
height: 47px;
border-radius: 23px;
color: #fff;
font-size: 15px;
padding: 0px 14px 0px 14px;
cursor: pointer;
&:hover{
  background-color: #36b34b;
}
`





const Directories = (props)=>{

    return (
    <Container>
      <ImageTols src={About} alt="about us"/>  
      <Text>
            <Title>Vous prenez le volant ? Dites-nous<br/> où vous allez !</Title>
            <p>Ensemble, permettons à des millions de personnes de se déplacer</p>
            <AddTrip>Proposer un trajet</AddTrip>
   </Text>
    </Container>
    );
  
}


export default Directories;