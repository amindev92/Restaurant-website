import React from 'react'
import { images } from '../../constants'

const Subheading = ({ title }) => {
    return (
        <div className='subheading' style={{ marginBottom: '1rem' }}>
            <p className='p__subheading'>{title}</p>
            <img src={images.Spoon} className="spoon__img" alt='spoon' ></img>
        </div>
    )
}

export default Subheading