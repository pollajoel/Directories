import React from "react";
import '../static/css/sliderComponent.css';
import styled from "styled-components";
import imageslider from '../static/images/building.jpg';

const Slide = styled.div `
  background-image: url(${props=>props.image});
  background-size: cover;
  height:300px;

`



const Slider = ()=>{

    return(
        <div>
        <Slide image={imageslider} alt="wakawaka slider">

        </Slide>
        </div>
    )

    
}

export default Slider;