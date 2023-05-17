import React from 'react'
import { images, data } from '../../constants'
import { Subheading } from '../../components'
import './laures.css'


const Award = ({ award: { imgUrl, title, subtitle } }) => {
    return (
        <div className='award'>
            <img src={imgUrl} alt={title + 'img'}></img>
            <div className='award__caption'>
                <p className='p__subheading' >{title}</p>
                <p className='p__text'>{subtitle}</p>
            </div>
        </div>
    )
}

const Laures = () => {
    return (
        <div className='laures app__bg section__padding app__wrapper'>
            <div className='app__wrapper_info'>
                <div className='laures__title'>
                    <Subheading title='Awards' />
                    <h2 className='headtext' >Our Awards</h2>
                </div>
                <div className='laures__caption'>
                    {data.awards.map((award, index) => (<Award award={award} key={index} />))}
                </div>
            </div>
            <div className='app__wrapper_img' >
                <img src={images.Laurels} alt='awards img'></img>
            </div>
        </div>
    )
}

export default Laures