import React from 'react'
import { Subheading } from '../../components'
import { images } from '../../constants'

const Findus = () => {
    return (
        <div className='findus app__wrapper app__bg flex__center'>
            <div className='app__wrapper_info finus__content'>
                <Subheading title='Contact' />
                <h2 className='headtext'>Find us</h2>
                <p>Iran , Mashhad - Vakil Abad</p>
                <h3>Opening hours</h3>
                <p>Sat - Thu : 9:00 am - 23:00 am</p>
                <p>Fri : 13:00 pm - 18:00 px</p>
                <button type='button'>Visit us</button>
            </div>
            <div className='app__wrapper_img findus__image'>
                <img src={images.findus} alt='findus img'></img>
            </div>
        </div>
    )
}

export default Findus