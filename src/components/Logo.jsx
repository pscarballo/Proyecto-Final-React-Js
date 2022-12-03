import React from "react";
import logo from '../images/logo.png'


export default function Logo() {
    return (
        <a href='/'>
            <img className='Logo' src={logo}></img>
        </a>
    )

}

