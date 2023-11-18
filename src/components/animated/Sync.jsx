import React from 'react'
import styled from 'styled-components'
import DoneIcon from '@mui/icons-material/Done'
import SyncIcon from '@mui/icons-material/Sync'

const Container = styled.div`
  span,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: scaleX(-1);
    transition: span 0.4s ease;
  }

  .animated {
    animation: spin 0.5s linear infinite;
    transition: all 0.2s ease-in-out;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  .static {
    cursor: default;
  }
`

export const Sync = ({ play }) => {
  return (
    <Container>
      {play ? (
        <button disabled={play} title={'Syncing data...'}>
          <span className='animated'>
            <SyncIcon />
          </span>
        </button>
      ) : (
        <button className='static' disabled={play} title={'Up to date!'}>
          <span>
            <DoneIcon />
          </span>
        </button>
      )}
    </Container>
  )
}
