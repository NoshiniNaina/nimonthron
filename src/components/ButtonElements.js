import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled (Link) `
    border-radius:50px;
    background: ${({primary}) => ( primary ? 'red' : 'red')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 18px' : '14px 30px')};
    color: ${({dark}) => (dark? 'black' : 'white')};
    font-size: ${({fontBig}) => (fontBig ? '10px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    transition : all 0.2s ease-in-out;
    &:hover{
        transition : all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'black': 'black')};
    }
`