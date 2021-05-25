import styled from 'styled-components';


export const Page = styled.div `
    justify-content: flex-start;
    align-items: center;
    background:white;
    display:flex;
    margin-left: 100px;
`
export const Container = styled.div `
    height:300px;
    width:300px;
    border-radius:10px;
    background:rgb(220,220,220);
    align-items: center;
    margin-top: 30px
`
export const Imgholder = styled.div `
    margin:auto;
    padding-top:10px;
    width:150px;
    height:150px;
    border: 3px black;
    boder-radius: 5px;
    margin-top:1rem;
`
export const Img = styled.img`
    padding-top:20px;
    width:150px;
    height:150px;
    object-fit:cover;
    input{
        display:none;
    }
`
export const Label= styled.div `
    padding-top:30px;
    width:100%;
    margin-top:1 rem;
    display: flex;
    justify-content: center
`
export const ContainerB=styled.div `
    color:red;
    margin:auto;
    display:flex;
    justify-content: center;
    align-items: center;
`
