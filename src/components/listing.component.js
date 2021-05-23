import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMapMarked} from '@fortawesome/free-solid-svg-icons';
import avatar from "../static/images/user.png";



const Container = styled.div `
    width:80%;
    height:400px;
    background:#fff;
    margin-right:12px;
    cursor:pointer;
    font-size: 15px;
`
const Header = styled.div `
    width:100%;
    background-image: url(${props => props.image});
    height:200px;
    background-size: contain;
    background-repeat: round;
    display:flex;
`
const FeatureTag  =  styled.div `
    width:50%
`
const Iconblack = styled.div `
    width:50%
`
const Featured = styled.span `
    background-color: #ff5a5f;
    padding: 7px;
    border-radius:2px;
    color:#fff;
`

const Blockfeatured = styled.div `
    display:flex;
    width:100%;
    position:relative;
    top: 164px;
`

const Title = styled.h1 `
    font-size:20px;
`

const Blocktag = styled.div `
    display:flex;
`


const User = styled.div `
    display: flex;
    padding-bottom:2px;
    margin-bottom:4px;
    margin-top: 17px;
    height:44px;
`

const Votes = styled.span `
    background-color:#91d119;
    color:#fff;
    padding: 3px;
    margin-right: 3px;
`

const Qvotes = styled.div `
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    margin: 0px 6px 0px 6px;
    padding: 0px 4px 0px 4px;
    
    
`

const IconsBlock = styled.div ``

const Icons = styled.span `
    color:#79c9ed;
    margin: 0px 4px 0px 2px;
    `

const Avatar = styled.img `
        width: 30px;
`
const AvatarBlock = styled.div `
    width:20%;
`

const Separator = styled.hr `
    margin-top:2px;
    margin-bottom:2px;
    background-color:#e5e5e5;
    color:#e5e5e5;
    border: 1px solid;
`
const Location = styled.div `
    display:flex;
`
const Located = styled.div `
    padding-right: 8px;
    border-right:1px solid #e5e5e5;
`

const Isopen = styled.div `
    margin-left: 8px;
    color:${props => props.isopen};
`



const Listing = (props)=>{


    const isopen ='#91d117';

    return(
        <Container>
            <Header image={props.list.image}>
                <Blockfeatured>
                    <FeatureTag>
                        <Featured>{props.list.tag}</Featured>
                    </FeatureTag>
                    <Iconblack>Icon1, Icon2</Iconblack>
                </Blockfeatured>
            </Header>
            <Title>{ props.list.title}</Title>
            <Blocktag>
                <div><Votes>5.0</Votes> 4 Rating</div>
                <Qvotes> From 5.0$</Qvotes>
                <IconsBlock><Icons><FontAwesomeIcon icon={faCoffee}/></Icons>Hotel</IconsBlock>
            </Blocktag>
            <User>
                <AvatarBlock><Avatar src ={avatar}/></AvatarBlock>
                <div>{ props.list.description }</div>
            </User>
            <Separator/>
            <Location>
                <Located><FontAwesomeIcon icon={faMapMarked}/> San Francisco</Located>
                <Isopen isopen ={isopen}> Is open Now!</Isopen>
            </Location>


        </Container>
    )
}


export default  Listing;