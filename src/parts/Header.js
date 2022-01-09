import "./Header.css"
import Switch from "react-switch";
import ThemeContext from '../context/ThemeContext'
import icon_moon from '../assets/images/icon-moon.svg'
import icon_sun from '../assets/images/icon-sun.svg'

import { useState, useContext } from 'react'

const Header = ({ text }) => {

    const { theme, onChangeSelectedTheme } = useContext(ThemeContext)

    const onChangeTheme = data => {
        onChangeSelectedTheme(data === true ? '☾' : '☀')
    }


    return (
        <header class="header">
            <h1>{text}</h1>
            <Switch
                checkedChildren="☀"
                checked={theme === '☾' ? true : false}
                unCheckedChildren="☾"
                onChange={e => onChangeTheme(e)}
            />
        </header >
    )
}

export default Header;

