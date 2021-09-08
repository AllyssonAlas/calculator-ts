import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;

  main {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
  }
`
