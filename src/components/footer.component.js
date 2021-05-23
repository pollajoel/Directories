import React from "react";
import styled from "styled-components";
import backgroundImage from "../static/images/footer.jpg";
import logo from "../static/images/building.jpg";




const FooterContainer = styled.div`

    padding:100px 0px 50px 100px;
   
    height:400px;
    width:100%;
    display:flex;
    background-image:url(${props=>props.image});
    background-size:cover;
    background-repeat:no-repeat;
    
`

const FooterWidget = styled.div `
    width:45%;
`

const Footelogo = styled.img `
   width:320px;
   height:480px;
   left: -50px;
    top: -65px;
    position:relative;
`

const NewsletterBlock = styled.div `
    display:flex;
    width:100%;
    margin-bottom:50px;
     
`

const FooterMenu = styled.div `
    display:flex;
`
const  BlockMenucontain = styled.div `
    display: flex;
    width:100%;
    color:#fff;
`


const ImageBlock = styled.div `
    width: 20%;
    background-color: #221715;
    height: 470px;
`

const MenuBlock = styled.div `
    width:80%;
    background-color:#221715;
    padding: 50px 0px 20px 40px;
    color:#000;
    height:400px;
`

const FooterMain = styled.div `
    background-color:#fff;
`

const SocialMedia = styled.div ``

const Separator = styled.hr `
    margin-left:-2px;
    border-top:1px;
    border-color:#e5e5e5;
    width:80%;
    margin-top:70px;
`

const FormInput = styled.input`
    height: 48px;
    width: 595px;
    border-radius: 20px;
    border: 2px solid #fff;
    color:#000;
    background-color:#fff;
    &:focus{
        outline:none;
    }
    
    &:hover{
    background:#221715;
    color:#fff;
    }
    
`

const SubmitButton = styled.button `
    padding: 17px;
    margin-left: -101px;
    border: 1px solid #fff;
    width: 302px;
    border-radius: 20px;
    border: 2px solid #fff;
    background-color:#ff5a5f;
    color:#fff;
    font-weight:500;
    cursor:pointer;
    &:hover{
        background-color:#91d119;
    }
    
    &:focus{
    outline:none;
    }
`

const WidgetMenili = styled.li `

    font-weight:100;
    cursor:pointer;
    padding: 3px 0px 3px 0px;
    &:hover{
        color:#91d119;
    }
    

`

const WidgetMenuul = styled.ul `
    list-style:none;
    padding:0px;
`

const Copyright= styled.div `
    color:#fff;
`



const Footer = ()=>{

    //const today = new Date();

    return(
        <FooterMain>
        <FooterContainer image={logo}>

            <ImageBlock>
                <Footelogo src={backgroundImage}/>
            </ImageBlock>

            <MenuBlock>
            <FooterMenu>
                <NewsletterBlock>
                    <form>
                        <FormInput type="text" placeholder="votre adresse Email ici"/>
                        <SubmitButton >S'inscrire Maintenant!</SubmitButton>
                    </form>
                </NewsletterBlock>
            </FooterMenu>
            <BlockMenucontain>
                    <FooterWidget>Partnership
                        <WidgetMenuul>
                            <WidgetMenili>About</WidgetMenili>
                            <WidgetMenili>About</WidgetMenili>
                            <WidgetMenili>About</WidgetMenili>
                        </WidgetMenuul>
                    </FooterWidget>
                    <FooterWidget>
                        About
                    <WidgetMenuul>
                        <WidgetMenili>About</WidgetMenili>
                        <WidgetMenili>About</WidgetMenili>
                        <WidgetMenili>About</WidgetMenili>
                    </WidgetMenuul>
                    </FooterWidget>
                    <FooterWidget>
                        Support
                    <WidgetMenuul>
                        <WidgetMenili>About</WidgetMenili>
                        <WidgetMenili>About</WidgetMenili>
                        <WidgetMenili>About</WidgetMenili>
                    </WidgetMenuul>
                    </FooterWidget>
                </BlockMenucontain>
                <SocialMedia>
                    <Separator/>
                    <div>
                        <Copyright>Tous droits reservés</Copyright>
                    </div>
                </SocialMedia>

            </MenuBlock>

        </FooterContainer>
            </FooterMain>
    )
}



export default Footer;