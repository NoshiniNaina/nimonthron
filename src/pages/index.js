import React, { useState } from 'react'
import BannerSection from '../components/Bannersection'


import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'

const Home = () => {
    const [isOpen,setIsOpen]= useState(false)
    const toggle =() => {
        setIsOpen(!isOpen);
    };
    return (
        <>
          <SideBar isOpen={isOpen} toggle= {toggle}/>
          <Navbar toggle={toggle}/> 
          <BannerSection /> 
          
        </>
    );
};

export default Home
