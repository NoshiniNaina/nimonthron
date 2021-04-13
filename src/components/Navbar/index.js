import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLink,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbarelements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
      <NavbarContainer>
        <NavLink to='/'>
          <NavLogo to='/'>nimontron</NavLogo>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
            <NavLink to='/about' >
              About
            </NavLink>
            <NavLink to='/services' >
              Services
            </NavLink>
            <NavLink to='/sign-up' >
              Sign Up
            </NavLink>
            <NavLink to='/contact-us' >
              Contact Us
            </NavLink>
          
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;


