import React from 'react'

import { Calculator } from '../../components/Calculator'

import { Container } from './styles'

export function Home(): JSX.Element {
  return (
    <Container>
      <main>
        <Calculator />
      </main>
    </Container>
  )
}
