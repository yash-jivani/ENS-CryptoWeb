import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>EN<span className='primary'>S</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href="https://www.instagram.com/yashh_jivanii__/" target="_blank"><FaInstagram className='icon'/></a>
                        <a href="https://www.linkedin.com/in/yash-jivani-0245ab214" target="_blank"><FaLinkedin className='icon'/></a>
                        <a href="https://www.instagram.com/yashh_jivanii__/" target="_blank"><FaTwitter className='icon'/></a>
                        <a href="https://github.com/yash-jivani" target="_blank"><FaGithub className='icon'/></a>
                </div>
            </div>
            <h5 style={{'textAlign':'center', 'marginBottom':'-60px'}}> &copy; <a href="https://github.com/yash-jivani" target="_blank">Yash Jivani</a>, All rights reserved </h5>
        </div>
    )
}

export default Footer