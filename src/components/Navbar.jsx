import React from 'react'

import './Navbar.scss'

export default function Navbar() {

    const [isActive, setIsActive] = React.useState(false)

	function showMenu() {
		setIsActive(prevState => !prevState)
	}

    return (
        <nav className='nav'>
            <div className='nav__logo'>
            <a href='#header'>
                <img src="/assets/logo.svg" alt="logo" />
            </a>
            </div>
            <div className={`nav__menu ${ isActive ? 'nav__menu--active' : ''}`}>
                <ul className='menu__list'>
                    <li className='list__links' onClick={() => setIsActive(false)}>
                        <a href="#apartments">Apartments</a>
                    </li>
                    <li className='list__links' onClick={() => setIsActive(false)}>
                        <a href="#about-us">About us</a>
                    </li>
                    <li className='list__links' onClick={() => setIsActive(false)}>
                        <a href="https://github.com/unjusodal?tab=repositories" target='_blank' rel='noreferrer'>Other Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsActive(false)}>
                            <button className='menu__button button'>Enquire Now</button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='nav__burger' onClick={showMenu}>
                <div className='line-1'></div>
                <div className='line-2'></div>
            </div>
        </nav>
    )
}