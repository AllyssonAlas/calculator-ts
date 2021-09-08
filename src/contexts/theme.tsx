import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as Theme } from 'styled-components'

import { atomOneLight } from '../themes/atomOneLight'
import { dracula } from '../themes/dracula'

interface ThemeProviderProps {
  children: JSX.Element[]
}

interface ThemeData {
  background: string
  foreground: string
  innerground: string
  border: string
  fontText: string
  fontPrimary: string
  fontSecondary: string
  fontTerciary: string
  fontDanger: string
}

interface ThemeContextData {
  theme: ThemeData
  toggleTheme(themeName: string): void
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState(atomOneLight)

  function toggleTheme(themeName: string) {
    localStorage.setItem('@theme', themeName)

    if (themeName === 'light') setTheme(atomOneLight)
    if (themeName === 'dark') setTheme(dracula)
  }

  useEffect(() => {
    async function loadTheme() {
      const currentTheme = await localStorage.getItem('@theme')

      if (currentTheme) {
        toggleTheme(currentTheme)
      }
    }

    loadTheme()
  }, [])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <Theme theme={theme}>{children}</Theme>
    </ThemeContext.Provider>
  )
}
