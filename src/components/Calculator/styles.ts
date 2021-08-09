import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
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
  height: 35%;

  h1 {
    align-self: center;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top: none;
    font-size: 1.5rem;
    height: 3rem;
    padding: 0 0.5rem;
    text-align: center;
    width: 40%;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    small {
      color: rgba(60, 60, 60, 1);
      font-size: 1rem;
      font-weight: medium;
      text-align: right;
    }

    p {
      font-weight: bold;
      font-size: 2.5rem;
      height: 3rem;
    }
  }
`

export const CalculatorKeyboard = styled.div`
  display: grid;
  height: 65%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);

  button {
    background: none;
    border: none;
    outline: none;

    p {
      font-size: 1.8rem;
    }
  }
`
