import React from "react";
import '../static/css/sliderComponent.css';
import styled from "styled-components";
import imageslider from '../static/images/building.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSearch, faSwatchbook} from '@fortawesome/free-solid-svg-icons';


const Slide = styled.div `
  background-image: url(${props=>props.image});
  background-size: cover;
  height:300px;
  display: flex;
 justify-content: center;
 align-items: end;
`


const Container = styled.div `
    display:flex;
    flex-direction: column;
    
`

const FormContainer = styled.form `
    display:flex;
    border-radius: 16px;
    background-color:#fff;
    width: 900px;
    padding: 11px 0px 8px 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    height: 52px;
    box-sizing: border-box;
`

const CheckBox = styled.div `
    border: 4px solid #054752;
    background: #fff;
    border-radius: 50%;
    height: 13px;
    width: 13px;
`

const ButtonCheck = styled.button `
    display:flex;
    cursor:pointer;
    font-size: 17px;
    border:0px;
    background-color:#fff;

`

const Labelbutton = styled.span `
    margin-left: 8px;

`

const Departlayout = styled.div `
  width: 25%;
`

const Secondlayout = styled.div `
width: 20%;

`

const ButonLayout = styled.div`
   background-color:#36b34b;
   width: 10%;
    height: 52px;
    margin-top: -11px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
`

const SubmitButton = styled(ButtonCheck) `
    background-color:#36b34b;
    color:#fff;

`

const TitleContainer = styled.div `
    position: relative;
    top: -54px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 30px;
`


const Slider = ()=>{

    return(
        <div>
        <Slide image={imageslider} alt="wakawaka slider">
            <Container>
                <TitleContainer><h1>Et si on Partait ensemble ?</h1></TitleContainer>
                <FormContainer>
                    <Departlayout>
                        <ButtonCheck><span><CheckBox></CheckBox></span><Labelbutton> Départ</Labelbutton></ButtonCheck>
                    </Departlayout>

                    <Departlayout>
                        <ButtonCheck><span><CheckBox></CheckBox></span> <Labelbutton>Destination</Labelbutton></ButtonCheck>
                    </Departlayout>
                    
                    <Secondlayout>
                        <ButtonCheck>
                            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                            <Labelbutton>Aujourd'hui</Labelbutton>
                        </ButtonCheck>
                    </Secondlayout>

                    <Secondlayout>
                        <ButtonCheck>
                            <FontAwesomeIcon icon={faSwatchbook}></FontAwesomeIcon>
                            <Labelbutton>1 place</Labelbutton>
                        </ButtonCheck>
                    </Secondlayout>

                    <ButonLayout>
                        <SubmitButton>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </SubmitButton>
                    </ButonLayout>

                </FormContainer>
            </Container>

        </Slide>
        </div>
    )

    
}

export default Slider;