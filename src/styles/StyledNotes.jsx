import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

export const NewNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
  }
  input {
    border: 1px solid black;
  }
`