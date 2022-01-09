import React, { createContext, useReducer, useEffect } from 'react'
import store from '../utils/store'

const ThemeContext = createContext()

const SET_THEME = 'SET_THEME'

const themeReducers = (state, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

export const ThemeState = ({ children }) => {
    const themeDefaultValue = {
        theme: store.use('theme', store.get('theme')),
    }

    const applyTheme = theme => {
        const root = document.getElementsByTagName('html')[0]
        root.style.cssText = theme.join(';')
    }

    const [state, dispatch] = useReducer(themeReducers, themeDefaultValue)

    useEffect(() => {
        onChangeSelectedTheme(themeDefaultValue.theme)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChangeSelectedTheme = data => {
        store.set('theme', data)
        if (data === '☾') {
            applyTheme(darkTheme)
        } else {
            applyTheme(lightTheme)
        }
        dispatch({
            type: SET_THEME,
            payload: data,
        })
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: state.theme,
                onChangeSelectedTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

const lightTheme = []

const darkTheme = [
    'background: #012137',
]

export default ThemeContext