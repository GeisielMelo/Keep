import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

export const NewNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: 5px;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    width: 100%;
    padding: 10px 5px 10px 5px;
    margin-top: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.color.six};
    box-shadow: 0 1px 5px black;
  }
  textarea,
  input {
    padding: 5px;
    width: 100%;
    resize: none;
    height: 100%;
    border-radius: 5px;
    background: none;
    color: ${(props) => props.theme.color.two};
  }
  input {
    height: 30px;
    margin-bottom: 5px;
    font-size: ${(props) => props.theme.font.size.es};
    font-family: ${(props) => props.theme.font.family.one};
  }
  textarea {
    height: 50px;
    margin-bottom: 5px;
    &::placeholder {
      font-size: ${(props) => props.theme.font.size.es};
      font-family: ${(props) => props.theme.font.family.one};
    }
  }
  button {
    position: absolute;
    bottom: -15px;
    right: 15px;
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: ${(props) => props.theme.color.two};
    background-color: ${(props) => props.theme.color.five};
  }
`
