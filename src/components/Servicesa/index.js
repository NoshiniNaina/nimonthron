import React from 'react';
import Icon1 from '../../images/one.jpg';
import Icon2 from '../../images/food.jpg';
import Icon3 from '../../images/photot.jpg';
import Icon4 from '../../images/event.jpeg';
import {ServicesContainer,ServicesH1,ServicesH2,ServicesWrapper,
    ServicesCard,ServicesIcon} from './ServicesElements';
const Servicesa = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Convention certer</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Food</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Photographer</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Event planner</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Servicesa