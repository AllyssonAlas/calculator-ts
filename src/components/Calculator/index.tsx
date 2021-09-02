import React, { useState } from 'react'
import { FaBackspace } from 'react-icons/fa'

import { Container, CalculatorScreen, CalculatorKeyboard, Button } from './styles'

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
        <Button fontSecondary onClick={handleClearCalculator} type={'button'}>
          <p>AC</p>
        </Button>
        <Button fontSecondary onClick={() => handleSetOperatorType('^')} type={'button'}>
          <p>^</p>
        </Button>
        <Button fontSecondary onClick={() => handleSetOperatorType('%')} type={'button'}>
          <p>%</p>
        </Button>
        <Button fontDanger onClick={handleDeleteDigits} type={'button'}>
          <FaBackspace />
        </Button>
        <Button onClick={() => handleCalculatorDigits('1')} type={'button'}>
          <p>1</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('2')} type={'button'}>
          <p>2</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('3')} type={'button'}>
          <p>3</p>
        </Button>
        <Button fontTerciary onClick={() => handleSetOperatorType('*')} type={'button'}>
          <p>*</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('4')} type={'button'}>
          <p>4</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('5')} type={'button'}>
          <p>5</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('6')} type={'button'}>
          <p>6</p>
        </Button>
        <Button fontTerciary onClick={() => handleSetOperatorType('+')} type={'button'}>
          <p>+</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('7')} type={'button'}>
          <p>7</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('8')} type={'button'}>
          <p>8</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('9')} type={'button'}>
          <p>9</p>
        </Button>
        <Button fontTerciary onClick={() => handleSetOperatorType('-')} type={'button'}>
          <p>-</p>
        </Button>
        <Button onClick={handleAddDot} type={'button'}>
          <p>.</p>
        </Button>
        <Button onClick={() => handleCalculatorDigits('0')} type={'button'}>
          <p>0</p>
        </Button>
        <Button onClick={handleSetResult} type={'button'}>
          <p>=</p>
        </Button>
        <Button fontTerciary onClick={() => handleSetOperatorType('/')} type={'button'}>
          <p>/</p>
        </Button>
      </CalculatorKeyboard>
    </Container>
  )
}
