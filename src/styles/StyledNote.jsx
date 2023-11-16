import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 240px;
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 5px;
  }
  h1 {
    font-size: 16px;
  }
  p {
    margin: 10px 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    gap: 5px;
  }
  li {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 12px;
  }
  .buttons {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 5px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      width: 28px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`
