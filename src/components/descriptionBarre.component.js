import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uniqid from 'uniqueid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck,faCar, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';


const Container = styled.div `
    display: flex;
    width: 100%;
    height: 500px;
    margin: 10px 0px 10px 0px;
    justify-content: center;
    flex-wrap: wrap;
`

const Col = styled.div `
    width: 23%;
    border:1px solid ${props=>props.bgcolor};
    margin: 20px;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    height: 236px;
    padding: 24px;
    background-color: ${props=>props.bgcolor};
    cursor: pointer;
`
const Title = styled.h1 `
    font-size:20px;
    font-weight: 600;
    text-align: center;
`

const Description = styled.div `
    padding: 0px 30px 0px 30px;
    text-align: justify;
    a{
        text-decoration: none;
        color:#000;
        font-weight:600;
    }

    a:hover{
        color: #fff;
    }
`

const Icon = styled.div `
    width: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    display:flex;
    justify-content: center;
`
const TitleContainer = styled.div `
    width: 100%;
    text-align: center;
    font-size: 32px;
    padding-top: 19px;
    p{
        font-size: 15px;
    }
`

const Separator = styled.hr `
    width: 10%;
    height: 5px;
    background: #000;
`

const CheckIcon = styled(TitleContainer)`

    display: flex;
    justify-content: center;
    color: #34489f;
    div{
        width: 4%;
        height: 100%;
        border-radius: 50%;
        padding-top: 5px;
        background-color: #ccc;
        &:hover{
            color:#fff;
        }
    }
   

`


const DescriptionBarre = ()=>{

    const bg ="#ff9e67";
    const data = [
        {
        title:'recherchez votre trajet',
        description:'Précisez votre Date et horaire de départ , votre destination, . Puis trouvez le trajet qui vous ',
        link:'',
        linktitle:'Trouver un trajet',
        icon:faCar
    },

    {
        title:'Publier votre trajet',
        description:'C\'est assez simple ,dites simplement où vous allez, quand vous partez et où vous aimeriez récupérer et déposer les passagers',
        link:'',
        linktitle:'Publier un trajet',
        icon:faPlus
    },
    {
        title:'recevez de l\'argent',
        description:'Précisez votre Date et horaire de départ , votre destination, . Puis trouvez le trajet qui vous ',
        link:'',
        linktitle:'Comment ça marche ?',
        icon:faMoneyCheck
    }

]

    return(
    <Container>
        <TitleContainer>
            Vous êtes Propriétaire d'une Voiture ?
            <Separator/>
            <p>Faites des économies sur vos déplacements, publiez gratuitement vos annonces de covoiturage !</p>
        </TitleContainer>
        {
          data.map(data=><Col bgcolor={bg} key={uniqid()}>
              <Icon>
                  <FontAwesomeIcon icon={data.icon} size="3x" />
              </Icon>
              <><Title>{data.title}</Title></>
              <Description>
                    <p>{data.description}</p>
                    <Link to={data.link}>{data.linktitle}</Link>
              </Description>
          </Col>)
        }
        <CheckIcon>
            <div>
            <FontAwesomeIcon icon={faCheck}/>
            </div>
        </CheckIcon>
    </Container>
    )
}


export default DescriptionBarre;