import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const Container = styled.div`
  position: fixed;
  top: 60px;
  right: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.six};  
  box-shadow: 0 1px 5px black;
  z-index: 2;

  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
    color: ${(props) => props.theme.color.two}; 
  }

  h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => props.theme.color.seven};  
  }

  p {
    border: none;
    cursor: pointer;
    overflow: hidden;

    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: ${(props) => props.theme.font.size.sm};
    color: ${(props) => props.theme.color.seven}; 

    &:hover {
      border-radius: 4px;
      padding-left: 10px;
    }
  }
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.color.seven}; 
`
