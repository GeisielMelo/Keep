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
`

export const EditMode = styled.div`
  display: flex;
  flex-direction: column;
  &:hover{
    cursor: text;
  }

  h1 {
    font-size: 16px;
  }
  p {
    margin: 10px 0;
  }
  .textarea-title {
    font-size: 16px;
  }
  .textarea-description {
    margin: 10px 0;
  }
`
export const NormalMode = styled.div`
  ul {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    width: 100%;
    gap: 5px;
    justify-content: flex-end;
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
