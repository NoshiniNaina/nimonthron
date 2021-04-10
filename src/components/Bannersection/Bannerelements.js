import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const BannerContainer =styled.div `
    background: black;
    display: flex;
    justify-content: center;
    align-item: center;
    padding-top: 150px;
    height: 500px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:linear-gradient(
                180deg, 
                rgba(0,0,0,0.30) 1000% , 
                rgba (0,0,00,0.60) 100%
            ),
        linear-gradient(180deg, rgba(0,0,0,0.20) 0%,transparent 100%);
        z-index:1;

    }
`;

export const Bannerbg =styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    overflow: hidden;
`
export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const Bannercontent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-item: center;
`
export const Bannerh1= styled.h1 `
    color: White;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Bannerp= styled.p `
    margin-top: 24px;
    color: White;
    font-size: 24px;
    text-align: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const BannerBtnWrapper= styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    
`
export const ArrowForward= styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight= styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`



