import React from 'react'
import { FooterOverlay, Newsletter } from '../../components'
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi"
import './footer.css'

const Footer = () => {
    return (
        <div className='footer section__padding'>
            <Newsletter />
            <FooterOverlay />
            <div className='footer__container'>
                <div className='footer__container-contact'>
                    <h2 className='headtext_2'>Contact US</h2>
                    <p>Vakil Abad, MAshhad , IR</p>
                    <p>+98-915-343-</p>
                </div>
                <div className='footer__container-logo'>
                    <h1 className='headtext'>Restaurant</h1>
                    <p>The best way to find yourself is to lose yourself in service of others</p>
                    <div className='footer__container-logo__icons'>
                        <FiInstagram />
                        <FiFacebook />
                        <FiTwitter />
                    </div>
                </div>
                <div className='footer__container-work'>
                    <h2 className='headtext_2'>Working hours</h2>
                    <p>Saturady - Thursday:</p>
                    <p>9:00 - 23:00</p>
                </div>
            </div>
        </div>
    )
}

export default Footer