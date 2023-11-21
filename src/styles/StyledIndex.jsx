import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #060b10;
  /* height: 100dvh; */
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100svh;
  

  width: 100%;
  color: #fff;

  h1 {
    font-size: 50px;
  }
  p {
    text-align: center;
    max-width: 750px;
    margin: 20px 0;
    padding: 0 20px;
  }
  div {
    display: flex;
    gap: 10px;
    button {
      padding: 10px 20px;
      border-radius: 8px;
      background: none;
      border: 1px solid;
    }
    .btn-1 {
      background-color: #32e6e2;
      border-color: #32e6e2;
      color: #060b10;
    }
    .btn-2 {
      border-color: #fff;
      color: #fff;
    }
  }
`

export const Technologies = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  max-width: 750px;
  padding: 0 20px;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto 100px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    -webkit-box-align: center;
    background-color: rgb(47, 59, 84);
    padding: 30px 20px;
    border-radius: 4px;
    transition: all 0.25s ease-in-out 0s;

    text-align: center;
    font-size: 16px;
    color: #fff;
    img {
      max-width: 70px;
      max-height: 70px;
    }
    span {
      margin-top: 10px;
    }
  }
`

export const Footer = styled.div`
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 768px) {
    position: static;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  background-color: #060b10;

  p {
    font-size: 12px;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: color 0.2s ease;
    &:hover {
      color: #32e6e2;
    }
  }
`
