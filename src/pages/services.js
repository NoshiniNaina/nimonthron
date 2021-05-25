import React , {useContext,useState} from 'react';
import Navbara from '../components/Navbar/index copy';
import ServiceFragment from '../components/servicepage/Servicefragments'


const services = () => {
    return (
        <div>
            <Navbara></Navbara>
           <ServiceFragment/>
        </div>
    )
}

export default services