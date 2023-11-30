import styled, { css } from 'styled-components'

const ElementDisabled = css`
  &:disabled {
    cursor: not-allowed;
  }
`
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: rgb(6, 11, 16);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  margin: 0 100px;
  padding: 100px 0px;
  max-width: 700px;
  width: calc(100% - 200px);
  gap: 20px;

  @media (max-width: 769px) {
    margin: 0 50px;
    width: calc(100% - 100px);
  }
  @media (max-width: 480px) {
    margin: 0;
    width: calc(100% - 25px);
  }
  h1 {
    font-size: ${(props) => props.theme.font.size.md};
    font-weight: 600;
    color: rgb(255, 255, 255);
  }
  input {
    ${ElementDisabled}
    max-width: 380px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: rgb(18, 24, 31, 255);
    border: 1px solid;
    border-color: rgb(62, 69, 78);
    color: rgb(255, 255, 255);
    transition: 0.2s ease-in-out;
    &:focus {
      border-color: rgb(255, 255, 255);
    }
  }
  button {
    ${ElementDisabled}
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 380px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: rgb(50, 230, 226);
    transition: 0.2s;
    font-size: ${(props) => props.theme.font.size.sm};
    font-weight: 600;
    color: rgb(18, 24, 31, 255);
    &:hover {
      background-color: rgb(142, 251, 247);
    }
  }
  a {
    color: rgb(50, 230, 226);
    cursor: pointer;
    text-decoration: none;
    font-size: ${(props) => props.theme.font.size.es};
    font-weight: 600;
    border-bottom: 1px solid rgb(50, 230, 226);
  }

  p {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: ${(props) => props.theme.font.size.es};
    font-weight: 600;
    span {
      cursor: pointer;
      color: rgb(50, 230, 226);
      border-bottom: 1px solid rgb(50, 230, 226);
    }
  }
`

export const Footer = styled.footer`
  display: none; // Disabled footer

  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: rgb(126, 129, 131);
  font-size: ${(props) => props.theme.font.size.es};
  a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(126, 129, 131);
    &:hover {
      color: rgb(161, 167, 171);
    }
  }
`
