import "./Header.css"
import icon_moon from '../assets/images/icon-moon.svg'
import icon_sun from '../assets/images/icon-sun.svg'

import { useState } from 'react'
const Header = ({ text }) => {

    const [theme, setTheme] = useState(false)

    const switchTheme = () => {
        setTheme(!theme)
    }
    return (
        <header class="header">
            <h1>{text}</h1>

            <div className="theme-switcher" onClick={switchTheme}>
                {!theme ? <div className="theme-switcher">Dark
                    <img src={icon_moon} alt="" />
                </div> : <div className="theme-switcher">Light
                    <img src={icon_sun} alt="" />
                </div>}
            </div>
        </header >
    )
}

export default Header;

