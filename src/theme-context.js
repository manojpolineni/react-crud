import React from 'react'
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
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
  // Default theme is light
  const [dark, setDark] = React.useState(false)

  // On mount, read the preferred theme from the persistence
  // React.useEffect(() => {
  //   const isDark = localStorage.getItem('dark') === 'true'
  //   setDark(isDark)
  // }, [dark])

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark
    // localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.light : themes.dark

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }