import React, { createContext,useContext, useState} from 'react';
import {Link} from 'react-router';
import {
  NavA,
  NavbarContainer,
  NavLink,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbarelements copy';
export const UserContext= createContext({
});

const Navbara = ({toggle}) => {
  const [status,setStatus]=React.useState(true)
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <>
      <NavA>
         <NavbarContainer>
         
          <NavLink to='/'>
            <NavLogo to='/'>nimontron</NavLogo>
          </NavLink>
          <Bars onClick={toggle}/>
         
            <NavMenu>
              <NavLink to='/about' >
                Home
              </NavLink>
              <NavLink  to={'/services'} >
                Services
              </NavLink>
              <NavLink to='/contact-us' >
                  Profile
              </NavLink>
            </NavMenu>
            {/* <NavBtn>  
              <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}></UserContext.Provider>
              <NavBtnLink to='/signout'>email:{loggedInUser.email}</NavBtnLink>
            </NavBtn> */}
            <NavBtn>  
              <NavBtnLink to='/home'>SignOut</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </NavA>
    </>
    
  );
};

export default Navbara;


