import React from 'react'
import { Subheading } from '../../components'
import { images } from '../../constants'
import './header.css'

const Header = () => {
    return (
        <div className='flex__center app__wrapper section__padding header'>
            <div className='app__wrapper_info'>
                <Subheading title="Experience the real taste of food with us." />
                <h2 className='header__title'>Our slogan is healthy life with healthy food</h2>
                <p className='p__text'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
            </div>
            <div className='app__wrapper_img'>
                <img src={images.Welcome} alt='header-img'></img>
            </div>
        </div>
    )
}

export default Header