import styled from 'styled-components'

export const AboutContainer = styled.div `
   color: red;
   background: ${({lightbg})=> (lightbg ? 'red' : 'White')}; 
   @media screen and (max-width: 760px) {
       paddig: 10px 0;
   }
`
export const AboutWrapper=styled.div `
    display: grid;
    z-index: 1;
    height: 460px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    paddig: 50px 24px;
    justify-content: center;
`


export const Heading= styled.h1 `
    
    text-align: center;
    margin-top: 80px;
    font-size: 36px;
    line-height: 1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ? 'Red' : 'red')};

    @media screen and(max-width:480px){
        font-size: 32px;
    }
`
export const Subtitle =styled.p `
    max-width: 100%;
    font-size: 18px;
    line-height: 24px;
    margin-left: 40px;
    margin-right:40px;
    color: ${({darkText}) => (darkText? 'purple': 'Black')};
`
