import React, { useState } from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjOne } from '../components/AboutSection/Data'

import BannerSection from '../components/Bannersection'
import Navbar from '../components/Navbar'

import Servicesa from '../components/Servicesa'
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
          <AboutSection {...homeObjOne}/>
          <Servicesa/>
        </>
    );
};

export default Home
