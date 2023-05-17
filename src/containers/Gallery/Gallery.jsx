import React, { useRef } from 'react'
import { BsInstagram, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Subheading } from '../../components'
import { images } from '../../constants'
import './gallery.css'

const imageItems = [images.Gallery01, images.Gallery02, images.Gallery03, images.Gallery04]

const Gallery = () => {

    const scrollRef = useRef(null)

    const handleScroll = (direction) => {
        const { current } = scrollRef

        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }


    return (
        <div className='gallery app__wrapper flex__center section__padding'>
            <div className='app__wrapper_info gallery__content'>
                <Subheading title='Instagram' />
                <h2>Photo Gallery</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                <button type='button'>View more</button>
            </div>
            <div className='gallery__slide'>
                <div className='gallery__slide-images' ref={scrollRef}>
                    {
                        imageItems.map((image, index) => (
                            <div className='gallery__slide-images__item'>
                                <img src={image} alt='Gallery img'></img>
                                <BsInstagram className='gallery__slide-images-icon' />
                            </div>
                        ))
                    }
                </div>
                <div className='gallery__slide-arrow'>

                    <BsFillArrowLeftCircleFill className='gallery__slide-arrow__icon' onClick={() => handleScroll('left')} />
                    <BsFillArrowRightCircleFill className='gallery__slide-arrow__icon' onClick={() => handleScroll('right')} />

                </div>
            </div>
        </div>
    )
}

export default Gallery