import React from 'react'

import { Container, CalculatorScreen, CalculatorKeyboard } from './styles'

export function Calculator(): JSX.Element {
  return (
    <Container>
      <CalculatorScreen>
        <h1>Calculadora</h1>
        <div>
          <small></small>
          <p></p>
        </div>
      </CalculatorScreen>
      <CalculatorKeyboard>
        <button type={'button'}>
          <p>AC</p>
        </button>
        <button type={'button'}>
          <p>+/-</p>
        </button>
        <button type={'button'}>
          <p>%</p>
        </button>
        <button type={'button'}>
          <p>/</p>
        </button>
        <button type={'button'}>
          <p>1</p>
        </button>
        <button type={'button'}>
          <p>2</p>
        </button>
        <button type={'button'}>
          <p>3</p>
        </button>
        <button type={'button'}>
          <p>*</p>
        </button>
        <button type={'button'}>
          <p>4</p>
        </button>
        <button type={'button'}>
          <p>5</p>
        </button>
        <button type={'button'}>
          <p>6</p>
        </button>
        <button type={'button'}>
          <p>+</p>
        </button>
        <button type={'button'}>
          <p>7</p>
        </button>
        <button type={'button'}>
          <p>8</p>
        </button>
        <button type={'button'}>
          <p>9</p>
        </button>
        <button type={'button'}>
          <p>-</p>
        </button>
        <button type={'button'}>
          <p></p>
        </button>
        <button type={'button'}>
          <p>0</p>
        </button>
        <button type={'button'}>
          <p>.</p>
        </button>
        <button type={'button'}>
          <p>=</p>
        </button>
      </CalculatorKeyboard>
    </Container>
  )
}
