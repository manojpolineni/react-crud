import React, {createContext,useState} from 'react'
import './App.css';

const themes = {
  dark: {
    backgroundColor: '#303030',
    color: '#ffffff',
    textColor: '#fff',
    border:'1px solid #fff'
  },
  light: {
    backgroundColor: '#ffffff',
    color: '#303030',
    textColor: '#303030',
    border:'1px solid #303030'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}
export const ThemeContext = createContext(initialState)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    const isDark = !dark
    setDark(isDark)
  }

  const theme = dark ? themes.light : themes.dark

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}