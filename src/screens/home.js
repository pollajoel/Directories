import React from 'react';
import HeaderComponent from "../components/header.component";
import Footer from "../components/footer.component";
import styled from "styled-components";


const  HomePage = styled.div `
    margin:0px;
    padding:0px;
    overflow:hidden;
    


`



const Home =()=>{
    return (
        <HomePage>
            <HeaderComponent></HeaderComponent>
            <Footer></Footer>
        </HomePage>)
}


export default Home;