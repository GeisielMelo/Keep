import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.color.four};

  .left-container {
    display: flex;
    margin: 0px 10px;
    @media screen and (max-width: 768px) {
      margin: 0px 5px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background: none;
      color: ${(props) => props.theme.color.two};
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    div {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
      }
      h1 {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.color.two};
        font-weight: 500;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  .middle-container {
    max-width: 500px;
    width: 100%;
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
  }

  .right-container {
    display: flex;
    margin: 0px 10px;
    gap: 10px;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background: none;
      color: ${(props) => props.theme.color.four};
      transition: background 0.2s ease;
      &:hover {
        background: ${(props) => props.theme.color.transparent};
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  padding: 10px;
  gap: 1px;
  width: ${(props) => (props['data-open'] ? '200px' : '60px')};
  transition: width 0.4s ease;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.color.four};
  button {
    font-family: ${(props) => props.theme.font.family.one};
    width: ${(props) => (props['data-open'] ? '100%' : '40px')};
    transition: width 0.5s ease;
    height: 40px;
    border-radius: 9999px;
    background: ${(props) => props.theme.color.five};
    color: ${(props) => props.theme.color.two};
    margin-bottom: 5px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props['data-open'] ? '0 10px' : '0 8px')};
    transition: padding 0.4s ease;
    height: 40px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
`
