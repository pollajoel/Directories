import React from "react";
import styled from "styled-components";
import Listing from "./listing.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";









const Directories = (props)=>{

    const settings = {

     dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

    const SectionListing = styled.div `
        padding-left:5%;
        padding-right:5%;
        display:block;
        flex-direction:row;
        margin-top:50px;
    `

    const Title = styled.h1 `
        
        font-size:23px;
        font-size: 27px;
        font-weight: 200;
        text-transform: capitalize;
    
    `

    return(
        <SectionListing>
            <Title>Annonces à  la une</Title>
            <Slider {...settings}>
                {
                    props.data.map(elt =><Listing list={elt} key={elt.id}></Listing>)
                }
            </Slider>
        </SectionListing>
    )
}


export default Directories;