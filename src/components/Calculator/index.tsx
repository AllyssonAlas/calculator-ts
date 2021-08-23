import React, { useState } from 'react'
import { FaBackspace } from 'react-icons/fa'

import { Container, CalculatorScreen, CalculatorKeyboard } from './styles'

export function Calculator(): JSX.Element {
  const [calculatorDigits, setCalculatorDigits] = useState('')
  const [calculatorResult, setCalculatorResult] = useState('')
  const [operatorType, setOperatorType] = useState('')

  function handleClearCalculator() {
    setCalculatorDigits('')
    setCalculatorResult('')
    setOperatorType('')
  }

  function handleCalculatorDigits(digit: string) {
    if (calculatorResult && !operatorType) setCalculatorResult('')

    setCalculatorDigits(`${calculatorDigits}${digit}`)
  }

  function handleAddDot() {
    const findDot = calculatorDigits.search(/[.]/g)

    if (findDot === -1) {
      handleCalculatorDigits('.')
    }
  }

  function handleDeleteDigits() {
    const newValue = calculatorDigits.substring(0, calculatorDigits.length - 1)

    setCalculatorDigits(newValue)
  }

  function handleSetResult() {
    if (!calculatorDigits) return

    switch (operatorType) {
      case '+': {
        const result = Number(calculatorResult) + Number(calculatorDigits)
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')

        return
      }
      case '-': {
        const result = Number(calculatorResult) - Number(calculatorDigits)
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')

        return
      }
      case '/': {
        const result = Number(calculatorResult) / Number(calculatorDigits)
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')

        return
      }
      case '*': {
        const result = Number(calculatorResult) * Number(calculatorDigits)
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')

        return
      }
      case '%': {
        const result = (Number(calculatorResult) / 100) * Number(calculatorDigits)
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')

        return
      }
      case '^': {
        const result = Math.pow(Number(calculatorResult), Number(calculatorDigits))
        setCalculatorResult(result.toString())
        setOperatorType('')
        setCalculatorDigits('')
      }
    }
  }

  function handleSetOperatorType(operator: string) {
    if (calculatorResult && calculatorDigits) {
      handleSetResult()
      setOperatorType(operator)

      return
    }

    if (calculatorResult) {
      setOperatorType(operator)
    }

    if (!calculatorDigits) return

    setOperatorType(operator)
    setCalculatorResult(calculatorDigits)
    setCalculatorDigits('')
  }

  return (
    <Container>
      <CalculatorScreen>
        <h1>Calculadora</h1>
        <div>
          <small>
            {calculatorResult} {operatorType}
          </small>
          <p>{calculatorDigits}</p>
        </div>
      </CalculatorScreen>
      <CalculatorKeyboard>
        <button onClick={handleClearCalculator} type={'button'}>
          <p>AC</p>
        </button>
        <button onClick={() => handleSetOperatorType('^')} type={'button'}>
          <p>^</p>
        </button>
        <button onClick={() => handleSetOperatorType('%')} type={'button'}>
          <p>%</p>
        </button>
        <button onClick={handleDeleteDigits} type={'button'}>
          <FaBackspace />
        </button>
        <button onClick={() => handleCalculatorDigits('1')} type={'button'}>
          <p>1</p>
        </button>
        <button onClick={() => handleCalculatorDigits('2')} type={'button'}>
          <p>2</p>
        </button>
        <button onClick={() => handleCalculatorDigits('3')} type={'button'}>
          <p>3</p>
        </button>
        <button onClick={() => handleSetOperatorType('*')} type={'button'}>
          <p>*</p>
        </button>
        <button onClick={() => handleCalculatorDigits('4')} type={'button'}>
          <p>4</p>
        </button>
        <button onClick={() => handleCalculatorDigits('5')} type={'button'}>
          <p>5</p>
        </button>
        <button onClick={() => handleCalculatorDigits('6')} type={'button'}>
          <p>6</p>
        </button>
        <button onClick={() => handleSetOperatorType('+')} type={'button'}>
          <p>+</p>
        </button>
        <button onClick={() => handleCalculatorDigits('7')} type={'button'}>
          <p>7</p>
        </button>
        <button onClick={() => handleCalculatorDigits('8')} type={'button'}>
          <p>8</p>
        </button>
        <button onClick={() => handleCalculatorDigits('9')} type={'button'}>
          <p>9</p>
        </button>
        <button onClick={() => handleSetOperatorType('-')} type={'button'}>
          <p>-</p>
        </button>
        <button onClick={handleAddDot} type={'button'}>
          <p>.</p>
        </button>
        <button onClick={() => handleCalculatorDigits('0')} type={'button'}>
          <p>0</p>
        </button>
        <button onClick={handleSetResult} type={'button'}>
          <p>=</p>
        </button>
        <button onClick={() => handleSetOperatorType('/')} type={'button'}>
          <p>/</p>
        </button>
      </CalculatorKeyboard>
    </Container>
  )
}
