import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import {FaBars,  FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        return setClick(!click)
    }
    
  return (
    <div className='header'>
        <div className='container'>
            <h1>EN<span className='primary'>S</span></h1>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Features</a>
                </li>
                <li>
                    <a href="/">Earn</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            <div className='btn-grp'>
                <button className='btn my-btn-one'>Connect Wallet</button>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click? <FaTimes size={20} style={{color:'#333'}} /> : <FaBars size={20} style= {{color:'#333'}} />}
            </div>

        </div>
    </div>
  )
}

export default Navbar