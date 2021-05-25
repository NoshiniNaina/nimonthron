import React from 'react'
import Navbara from '../components/Navbar/index copy'
import Profile from '../components/Profile/profile'
import {BrowserRouter as Router} from 'react-router-dom'
export default function profile() {
    return (
        <div>
            <Navbara></Navbara>
            <Profile></Profile>
        </div>
    )
}
