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
  background-color: #060b10;
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
    color: #fff;
  }
  input {
    ${ElementDisabled}
    max-width: 380px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #12181f;
    border: 1px solid;
    border-color: #3e454e;
    color: #fff;
    transition: 0.2s ease-in-out;
    &:focus {
      border-color: #fff;
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
    background-color: #32e6e2;
    transition: 0.2s;
    font-size: ${(props) => props.theme.font.size.sm};
    font-weight: 600;
    color: #12181f;
    &:hover {
      background-color: #8efbf7;
    }
  }
  a {
    color: #32e6e2;
    cursor: pointer;
    text-decoration: none;
    font-size: ${(props) => props.theme.font.size.es};
    font-weight: 600;
    border-bottom: 1px solid #32e6e2;
  }

  p {
    color: #fff;
    text-decoration: none;
    font-size: ${(props) => props.theme.font.size.es};
    font-weight: 600;
    span {
      cursor: pointer;
      color: #32e6e2;
      border-bottom: 1px solid #32e6e2;
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
  color: #7e8183;
  font-size: ${(props) => props.theme.font.size.es};
  a {
    text-decoration: none;
    cursor: pointer;
    color: #7e8183;
    &:hover {
      color: #a1a7ab;
    }
  }
`
