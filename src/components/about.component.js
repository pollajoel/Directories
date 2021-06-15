import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGift, faIdCard} from '@fortawesome/free-solid-svg-icons';


const Container = styled.div `
    display:flex;

`

const Col = styled.div `
    width: 100%;
    display:flex;
    justify-content: center;
`

const ColSm = styled.div `
    width: 30%;

`

const Text = styled.p `
    width: 90%;
    text-align: justify;
    color: rgb(112, 140, 145);
`

const Title = styled.h2`
    font-size: 18px;
    color: rgb(5,71,82);
`

const FirstTitle = styled.div`
    font-size: 28px;
    line-height: 28px;
    width: 27%;
    display: flex;
    justify-content: center;
`

const ReadMore = styled.div `
    width: 64%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: end;
    cursor: pointer;
`

const BlocTitle = styled.div `
    display: flex;
    margin-top: 80px;
    margin-bottom: 45px;
`

const Layout = styled.div `
    padding: 0px 91px 0px 91px;
`



const About =()=>{
    return (
        <Layout>
        <BlocTitle>
                <FirstTitle>Allez où vous voulez.<br/>D où vous voulez.</FirstTitle>
                <ReadMore>En savoir plus</ReadMore>
        </BlocTitle>
        <Container>
            <Col>
                <ColSm>
                <Title>Pratique</Title>
                <Text>Trouvez rapidement un covoiturage ou un bus à proximité parmi les millions de trajets proposés.</Text>
                </ColSm>
                <ColSm>
                <Title>Facile</Title>
                <Text>Trouvez le trajet parfait ! Il vous suffit d’entrer votre adresse exacte, de choisir le voyage qui vous convient le mieux, et de réserver.</Text>
                </ColSm>
                <ColSm>
                 <Title>Directe</Title>
                 <Text>Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux. </Text>
                </ColSm>
            </Col>
        </Container>

        <div>
        
        <BlocTitle>
                <FirstTitle>Ce qui va vous plaire</FirstTitle>
                <ReadMore>En savoir plus</ReadMore>
        </BlocTitle>
        <Container>
            <Col>
                <ColSm>
                <FontAwesomeIcon icon={faCar} size="2x"/>
                <Title>Avoir le choix</Title>
                <Text>Trouvez rapidement un covoiturage ou un bus à proximité parmi les millions de trajets proposés.</Text>
                </ColSm>
                <ColSm>
                <FontAwesomeIcon icon={faIdCard} size="2x"></FontAwesomeIcon>
                <Title>Communauté</Title>
                <Text>Trouvez le trajet parfait ! Il vous suffit d’entrer votre adresse exacte, de choisir le voyage qui vous convient le mieux, et de réserver.</Text>
                </ColSm>
                <ColSm>
                <FontAwesomeIcon icon={faGift} size="2x"/>
                 <Title>Cadeau de bienvenue</Title>
                 <Text>Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux. </Text>
                </ColSm>
            </Col>
        </Container>
        
        
        
        </div>


        </Layout>
    )
}

export default About;