// import React, { useState } from 'react'
import React from 'react'
import { ThemeProvider as ThemeContext } from 'styled-components'

// import { atomOneLight } from './atomOneLight'
import { dracula } from './dracula'

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return <ThemeContext theme={dracula}>{children}</ThemeContext>
}
