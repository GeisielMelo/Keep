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
  position: relative;
  display: flex;
  width: 100%;
  max-width: 250px;
  border-radius: 6px;

  input {
    width: 100%;
    height: 40px;
    background: ${(props) => props.theme.color.three};
    color: ${(props) => props.theme.color.two};
    padding: 0px 10px;
    border-radius: 6px;
    transition: background 0.2s ease;
    &:focus {
      background: ${(props) => props.theme.color.two};
      color: ${(props) => props.theme.color.one};
    }
  }

  button {
    position: absolute;
    right: 0px;
    height: 30px;
    width: 30px;
    background: none;
    border-radius: 50%;
    margin-top: 5px;
    margin-right: 10px;
    color: ${(props) => props.theme.color.three};
    &:hover {
      transition: color 0.2s ease, background 0.2s ease;
      color: ${(props) => props.theme.color.two};
      background: ${(props) => props.theme.color.five};
    }
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
    justify-content: center;
    padding: 5px 10px;
    border-radius: 5px;
    background: ${(props) => props.theme.color.two};
    margin: 10px;
    border-radius: 9999px;
  }
  p {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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
