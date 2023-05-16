import React from 'react'
import { Subheading } from '../../components'
import { images } from '../../constants'
import './chef.css'

const Chef = () => {
    return (
        <div className='chef app__bg app__wrapper section__padding'>
            <div className='chef__image app__wrapper_img'>
                <img src={images.chef} alt='chef img'></img>
            </div>
            <div className='chef__caption app__wrapper_info'>
                <div className='chef__caption-title'>
                    <Subheading title='Chef"s word' />
                    <h2>What we believe in</h2>
                </div>
                <div className='chef__caption-text'>

                    <p> <img src={images.Quote} alt='quote img'></img> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>

                </div>
                <p className='chef__caption-quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='chef__caption-sign'>
                    <p>gordon ramsay</p>
                </div>
            </div>
        </div>
    )
}

export default Chef