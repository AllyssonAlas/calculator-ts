// import React, { useState } from 'react'
import React from 'react'
import { ThemeProvider as ThemeContext } from 'styled-components'

type ThemeProviderProps = {
  children: React.ReactNode
}
export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const theme = { color: 'rgba(0, 0, 0, 1)' }

  return <ThemeContext theme={theme}>{children}</ThemeContext>
}
