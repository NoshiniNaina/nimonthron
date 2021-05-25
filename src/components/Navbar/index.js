import React, { useContext, useState,} from 'react';

import {
  Nav,
  NavA,
  NavbarContainer,
  NavLink,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbarelements';

const Navbar = ({toggle}) => {
  const [status,setStatus]=React.useState(true)
  const [newUser, setNewUser] = useState(false);
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
              <NavLink to='/contact-us' >
                Contact Us
              </NavLink>
            </NavMenu>
         
        
        <NavBtn>  
          <NavBtnLink to='/signin' onClick={()=>setStatus(!status)}>signin</NavBtnLink>
        </NavBtn>
        

        </NavbarContainer>
      </Nav> 
      
    </>
  );
};

export default Navbar;


