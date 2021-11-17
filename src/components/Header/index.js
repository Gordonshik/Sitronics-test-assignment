import React from 'react'
import logo from '../../images/logo.svg'
import './style.css'

export default function Header() {
    return (
        <div className='header-box'>
            <img 
                src={logo} 
                alt="logo"
                className='logo' />
                <hr className='line'/>
        </div>
    )
}
