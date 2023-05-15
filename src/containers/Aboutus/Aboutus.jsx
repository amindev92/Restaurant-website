import React from 'react'
import { images } from '../../constants'
import './aboutus.css'

const Aboutus = () => {
    return (
        <div className='aboutus section__padding flex__center app__bg'>
            <div className='aboutus__overlay flex__center'>
                <img src={images.G} alt="g letter"></img>
            </div>
            <div className='aboutus__container flex__center'>
                <div className='aboutus__container-about'>
                    <h2 className='headtext'>About</h2>
                    <img src={images.Spoon} alt='spoon img'></img>
                    <p className='p__text'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                </div>
                <div className='aboutus__container-knife'>
                    <img src={images.Knife} alt='knife img'></img>
                </div>
                <div className='aboutus__container-history'>
                    <h2 className='headtext'>Our history</h2>
                    <img src={images.Spoon} alt='spoon img'></img>
                    <p className='p__text'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus