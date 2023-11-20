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
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.color.six};
    box-shadow: 0 1px 5px black;
  }
  textarea,
  input {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.367);
    width: 100%;
    resize: none;
    height: 100%;
  }
  input {
    height: 30px;
    margin-bottom: 5px;
  }
  textarea {
    height: 50px;
    margin-bottom: 5px;
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
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
  }
`
