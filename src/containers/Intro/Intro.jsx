import React, { useRef, useState } from 'react'
import { film } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './intro.css'


const Intro = () => {

    const [playVideo, setPlayVideo] = useState(false)
    const videoRef = useRef()

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if (playVideo) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }



    return (
        <div className='intro'>
            <video src={film} ref={videoRef} loop type='video/mp4' controls={false} muted />
            <div className='intro__control flex__center' onClick={handleVideo}>
                <div className='intro__control-circle flex__center'>
                    {playVideo ? (
                        <BsPauseFill color='#fff' fontSize={30} />
                    ) : <BsFillPlayFill color='#fff' fontSize={30} />}
                </div>
            </div>
        </div>
    )
}

export default Intro