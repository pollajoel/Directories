import React from 'react';
import HeaderComponent from "../components/header.component";
import Footer from "../components/footer.component";
import styled from "styled-components";
import Slider from "../components/slider.component";
import HomeBarre from "../components/homeBarre.component";


const  HomePage = styled.div `
    margin:0px;
    padding:0px;
    overflow:hidden;
`



const Home =()=>{
    return (
        <HomePage>
            <HeaderComponent></HeaderComponent>
            <Slider></Slider>
            <HomeBarre></HomeBarre>
            <div className="sectionhome">

            </div>
            <Footer></Footer>
        </HomePage>)
}


export default Home;