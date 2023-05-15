import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <h1>Restaurant</h1>
            </div>
            <div className='navbar__menu'>
                <ul className='navbar__menu-items'>
                    <li className='navbar__menu-items__item'>
                        <a className='navbar__menu-items__link' href='#home'>Home</a>
                    </li>
                    <li className='navbar__menu-items__item'>
                        <a className='navbar__menu-items__link' href='#about'>About</a>
                    </li>
                    <li className='navbar__menu-items__item'>
                        <a className='navbar__menu-items__link' href='#menu'>Menu</a>
                    </li>
                    <li className='navbar__menu-items__item'>
                        <a className='navbar__menu-items__link' href='#awards'>Awards</a>
                    </li>
                    <li className='navbar__menu-items__item'>
                        <a className='navbar__menu-items__link' href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='navbar__buttons'>
                <a href='#home'>Log in/Register</a>
                <div />
                <a href='#home'>Book Table</a>
            </div>
            <div className='navbar__smallmenu'>
                <GiHamburgerMenu className='openmenu' color='#fff' fontSize={26} onClick={() => { setToggleMenu(true) }} />
                {
                    toggleMenu && (
                        <div className='navbar__smallmenu-overlay flex__center slide-bottom'>
                            <MdOutlineRestaurantMenu fontSize={27} className='closemenu' onClick={() => { setToggleMenu(false) }} />
                            <ul className='navbar__smallmenu-items'>
                                <li className='navbar__smallmenu-items__item'>
                                    <a className='navbar__smallmenu-items__link' href='#home'>Home</a>
                                </li>
                                <li className='navbar__smallmenu-items__item'>
                                    <a className='navbar__smallmenu-items__link' href='#about'>About</a>
                                </li>
                                <li className='navbar__smallmenu-items__item'>
                                    <a className='navbar__smallmenu-items__link' href='#menu'>Menu</a>
                                </li>
                                <li className='navbar__smallmenu-items__item'>
                                    <a className='navbar__smallmenu-items__link' href='#awards'>Awards</a>
                                </li>
                                <li className='navbar__smallmenu-items__item'>
                                    <a className='navbar__smallmenu-items__link' href='#contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar