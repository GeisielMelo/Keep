import styled from 'styled-components'

export const Container = styled.span`
  margin-top: 1px;
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props['data-online'] ? 'green' : 'red')};
  border-radius: 50%;
  box-shadow: 0 0 8px transparent;
  transition: box-shadow 0.2s ease-in-out, background-color 0.6s ease-in-out;
  box-shadow: 0 0 8px ${(props) => (props['data-online'] ? 'green' : 'red')};
`
