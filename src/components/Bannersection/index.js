
import React,{useState} from 'react'
import {Button} from '../ButtonElements';
import Video from '../../videos/video.mp4'
import {BannerContainer,Bannerbg,VideoBg,Bannercontent,Bannerh1,Bannerp,BannerBtnWrapper,ArrowForward,ArrowRight} from './Bannerelements'
const BannerSection = () => {
    const [hover,sethover]= useState(false)
    
    const onHover = () =>{ 
        sethover (!hover)}
    return (
       <BannerContainer id="home">
            <Bannerbg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </Bannerbg>
            <Bannercontent>
                <Bannerh1>Make Events More Beautiful</Bannerh1>
                <Bannerp>Sign up today and get best services for events!!</Bannerp>
                <BannerBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover? <ArrowForward /> : <ArrowRight/> }
                    </Button>
                </BannerBtnWrapper>
            </Bannercontent>
       </BannerContainer>
    )
}

export default BannerSection
