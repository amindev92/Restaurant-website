import React from 'react'
import Subheading from '../Subheading/Subheading'
import './newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='newsletter__heading'>
                <Subheading title='Newsletter' />
                <h2>Subscribe to our newsletter</h2>
                <p>And never miss last update</p>
            </div>
            <div className='newsletter__input'>
                <input type='text' placeholder='Enter your email...'></input>
                <button type='button'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter