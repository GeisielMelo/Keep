import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

export const Input = styled.div`
  display: flex;
  max-width: 310px;
  width: 100%;
  border: 1px solid #ccc;

  input {
    width: 100%;
    height: 40px;

    padding: 0px 10px;
  }
  button {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;

  div {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #eee;
    margin: 10px;
  }
  p {
    margin-right: 10px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    &:hover {
      color: rgb(229, 115, 115);
      border: 1px solid rgb(244, 199, 199);
    }
  }
`