import React, { createContext, useState } from 'react'
export const ThemeContext = createContext('dark')
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
