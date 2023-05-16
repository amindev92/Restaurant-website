import React from 'react'
import './menuitem.css'

const Menuitem = ({ title, price, tags }) => {
    return (
        <div className='menuitems'>
            <div className='menuitem__caption'>
                <h4>{title}</h4>
                <div />
                <p>{price}</p>
            </div>
            <p>{tags}</p>
        </div>
    )
}

export default Menuitem