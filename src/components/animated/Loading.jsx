import styled from 'styled-components'

const Spinner = styled.div`
  width: ${(props) => props.size || '25px'};
  height: ${(props) => props.size || '25px'};
  border-radius: 50%;

  div {
    border: 4px solid #222831;
    border-top: 4px solid #393e46;
    border-radius: 50%;
    border-style: dotted;
    max-width: ${(props) => props.size || '25px'};
    max-height: ${(props) => props.size || '25px'};
    width: 100%;
    height: 100%;

    animation: spin 2s linear infinite;
    transition: all 0.2s ease-in-out;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export const Loading = ({ size }) => {
  return (
    <Spinner size={size}>
      <div />
    </Spinner>
  )
}
