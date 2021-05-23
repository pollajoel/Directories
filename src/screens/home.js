import React from 'react';
import HeaderComponent from "../components/header.component";
import Footer from "../components/footer.component";
import styled from "styled-components";
import Slider from "../components/slider.component";
import SiteRooutes from "../components/SiteRooutes.component";
import Directories from "../components/directories.component";
import image from "../static/images/midtown-manhattan-new-york-city-usa.jpg"


const  HomePage = styled.div `
    margin:0px;
    padding:0px;
    overflow:hidden;
`



const Home =()=>{

    const Data = [
        {
            tag:"featured",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"restaurant",
            description:"Lorem Ipsum is simply dummy text of the printing",
            location:"paris",
            open:"is open now",
            image:image,

        },
        {
            tag:"AD",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"hotel",
            description:"my description here",
            location:"paris",
            open:"is open now",
            image:image
        },
        {
            tag:"featured",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"hotel",
            description:"my description here",
            location:"paris",
            open:"is open now",
            image:image
        },
        {
            tag:"Most view",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"hotel",
            description:"my description here",
            location:"paris",
            open:"is open now",
            image:image
        },
        {
            tag:"featured",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"hotel",
            description:"my description here",
            location:"paris",
            open:"is open now",
            image:image
        },
        {
            tag:"Best rated",
            title:"my room hotel",
            ratingnuber:4,
            note:5.0,
            price:2,
            type:"hotel",
            description:"my description here",
            location:"paris",
            open:"is open now",
            image:image
        }
]







    return (
        <HomePage>
            <HeaderComponent></HeaderComponent>
            <Slider></Slider>
            <Directories data={Data}></Directories>
            <SiteRooutes></SiteRooutes>
            <Footer></Footer>
        </HomePage>)
}


export default Home;