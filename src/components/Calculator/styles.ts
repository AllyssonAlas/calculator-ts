import styled, { css } from 'styled-components'

interface ButtonProps {
  fontPrimary?: boolean
  fontSecondary?: boolean
  fontTerciary?: boolean
  fontDanger?: boolean
}

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 50rem;
  overflow: hidden;
  width: 30rem;
`

export const CalculatorScreen = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 2rem 1rem;
  height: 30%;

  header {
    align-self: center;
    border: 2px solid ${({ theme }) => theme.border};
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top: none;
    display: flex;
    font-size: 1.5rem;
    font-weight: normal;
    height: 3rem;
    overflow: hidden;
    width: 40%;

    button {
      align-items: center;
      background-color: ${({ theme }) => theme.fontText};
      border: 1px solid ${({ theme }) => theme.border};
      display: flex;
      font-size: 1.7rem;
      justify-content: center;
      outline: none;
      cursor: pointer;
      width: 50%;

      svg {
        fill: ${({ theme }) => theme.background};
      }
    }

    button:first-of-type {
      background-color: ${({ theme }) => theme.background};

      svg {
        fill: ${({ theme }) => theme.fontText};
      }
    }
  }

  div {
    align-items: flex-end;
    color: ${({ theme }) => theme.fontText};
    display: flex;
    flex-direction: column;
    height: 70%;

    small {
      font-size: 1.7rem;
      font-weight: medium;
      text-align: right;
    }

    p {
      font-weight: bold;
      font-size: 3rem;
      height: 3rem;
    }
  }
`

export const ThemePicker = styled.div``

export const CalculatorKeyboard = styled.div`
  background-color: ${({ theme }) => theme.foreground};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 75%;
  justify-items: center;
  padding-top: 3rem;
`

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.innerground};
  border: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.fontPrimary};
  height: 5rem;
  outline: none;
  width: 5rem;

  ${({ fontSecondary, theme }) =>
    fontSecondary &&
    css`
      color: ${theme.fontSecondary};
    `}

  ${({ fontTerciary, theme }) =>
    fontTerciary &&
    css`
      color: ${theme.fontTerciary};
    `}

  ${({ fontDanger, theme }) =>
    fontDanger &&
    css`
      color: ${theme.fontDanger};
    `}

  p {
    font-size: 1.8rem;
  }

  svg {
    height: 2rem;
    width: 2rem;
  }
`
