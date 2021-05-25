
import React , {useContext,useState} from 'react';
import Signin from '../components/Signinsection/Signin'
import "firebase/auth"

import Navbar from '../components/Navbar';


const signin = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Signin/>
        </div>
    )
}

export default signin
