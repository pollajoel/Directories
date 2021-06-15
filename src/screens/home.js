import React from 'react';
import Footer from "../components/footer.component";
import styled from "styled-components";
import Slider from "../components/slider.component";
import Directories from "../components/directories.component";
import image from "../static/images/midtown-manhattan-new-york-city-usa.jpg"
import Navbar from '../components/homeBarre.component';
import CovidBarre from '../components/Covidbarre.components';
import Bus from '../components/bus.component';
import DescriptionBarre from '../components/descriptionBarre.component';


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
            <Navbar ></Navbar>
            <CovidBarre></CovidBarre>
            <Slider></Slider>
            <Directories data={Data}></Directories>
            <Bus></Bus>
            <DescriptionBarre></DescriptionBarre>
            
            <Footer></Footer>
        </HomePage>)
}


export default Home;