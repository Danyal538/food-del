import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem earum veritatis deserunt magnam quo neque blanditiis debitis eius saepe consectetur minus iusto eaque officiis repellat ex cumque, eos eveniet!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+92-122334-567</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
            CopyRight 2024 © Tomato.com - All Rights Reserved 
            </p>
        </div>
    )
}

export default Footer