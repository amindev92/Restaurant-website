import React from 'react'
import './menu.css'
import { images, data } from '../../constants'
import { Subheading, Menuitem } from '../../components'

const Specialmenu = () => {
    return (
        <div className='specialmenu section__padding flex__center'>
            <div className='specialmenu__heading'>
                <Subheading title='Good price, high quality' />
                <h2>Just choose one of the menu options once.</h2>
            </div>
            <div className='specialmenu__container'>
                <div className='specialmenu__container-menu'>
                    <div className='specialmenu__container-menu__title'>
                        <h3>Wine</h3>
                    </div>
                    <div className='specialmenu__container-menu__items'>
                        {
                            data.wines.map((wine, index) => (
                                <Menuitem title={wine.title} price={wine.price} tags={wine.tags} key={wine.title + index} />
                            ))
                        }
                    </div>
                </div>
                <div className='specialmenu__container-image'>
                    <img src={images.Menu} alt='menu img' ></img>
                </div>
                <div className='specialmenu__container-menu'>
                    <div className='specialmenu__container-menu__title'>
                        <h3>cocktails</h3>
                    </div>
                    <div className='specialmenu__container-menu__items'>
                        {
                            data.cocktails.map((cocktail, index) => (
                                <Menuitem title={cocktail.title} price={cocktail.price} tags={cocktail.tags} key={cocktail.title + index} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='specialmenu__container-btn'>
                <button type='button' >Request order</button>
            </div>
        </div>
    )
}

export default Specialmenu