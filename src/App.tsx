import React from 'react'

import { GlobalStyles } from './styles/global'

import { Home } from './pages/Home'

import { ThemeProvider } from './contexts/theme'

export function App() {
  return (
    <ThemeProvider>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
