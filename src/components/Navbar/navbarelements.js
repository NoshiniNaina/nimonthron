import { FaBars } from 'react-icons/fa';
import { NavLink as LinkR } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
    background: red ;
    height: 60px;
    
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:1rem;
    position: sticky;
    top:0;
    z-index: 10;
    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer=styled.div `
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
`;


export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavLogo=styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    
    margin-left:-20px;
    font-weight: bold;
    text-decoration:none;
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align:center;
  margin-right: -524px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width:768px){
        display:none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 30px;
  background: Black;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  margin-left: 560px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;