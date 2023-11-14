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
  border-bottom: 1px solid #ccc;

  .left-container {
    display: flex;
    margin: 0px 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50px;
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
      }
    }
  }

  .middle-container {
    max-width: 500px;
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      border: 1px solid #ccc;
      padding: 0px 10px;
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
  border-right: 1px solid #ccc;
  width: ${(props) => (props['data-isOpen'] ? '200px' : '60px')};
  transition: width 0.4s ease;
  button {
    width: ${(props) => (props['data-isOpen'] ? '100%' : '40px')};
    transition: width 0.5s ease;
    height: 40px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props['data-isOpen'] ? '0 10px' : '0 8px')};
    transition: padding 0.4s ease;
    height: 40px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
`
