import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWapper,
        SidebarMenu,
        SidebarLink,
        Sidebtnwrap,
        SidebarRoute} from './SideBarElements';
const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='/services'onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='/signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <Sidebtnwrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </Sidebtnwrap>
            </SidebarWapper>
        </SidebarContainer>
    )
}

export default SideBar
