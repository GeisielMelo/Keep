import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  max-width: 240px;
  /* max-height: 300px; */

  height: min-content;

  border: 1px solid;
  border-color: ${(props) => props.theme.color.four};
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 5px;
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.es};
    color: ${(props) => props.theme.color.two};
    font-weight: 500;
    word-wrap: break-word;
    max-height: 60px;
    overflow: hidden;
  }

  p {
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.color.two};
    font-size: ${(props) => props.theme.font.size.sm};
    word-wrap: break-word;
    max-height: 180px;
    overflow-y: auto;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    margin-bottom: 40px;
  }
  li {
    padding: 2px 10px;
    border: 1px solid;
    border-radius: 9999px;
    border-color: ${(props) => props.theme.color.four};

    list-style: none;
    color: ${(props) => props.theme.color.two};
    font-size: 12px;

    transition: background 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.color.transparent};
    }
  }
  .buttons {
    position: absolute;
    bottom: 5px;
    right: 5px;
    gap: 5px;

    display: flex;
    width: calc(100% - 40px);
    justify-content: flex-end;
    padding: 5px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: none;
      color: ${(props) => props.theme.color.four};
      transition: background 0.2s ease;
      &:hover {
        background: ${(props) => props.theme.color.transparent};
      }
    }
  }
`
