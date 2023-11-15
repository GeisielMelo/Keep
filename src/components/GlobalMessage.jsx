import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Message = styled.div`
  position: absolute;
  bottom: 100px;
  max-width: 350px;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  background-color: ${(props) =>
    props['data-type'] === 'error'
      ? '#fad2e1'
      : props['data-type'] === 'success'
      ? '#98f5e1'
      : props['data-type'] === 'warning'
      ? '#ffe6d3'
      : '#ededed'};

  color: ${(props) =>
    props['data-type'] === 'error'
      ? '#7c193d'
      : props['data-type'] === 'success'
      ? '#236c5b'
      : props['data-type'] === 'warning'
      ? '#ff892f'
      : '#5d5d5d'};
`

export const GlobalMessage = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isVisible ? (
    <Message data-type={type}>
      <p>{message}</p>
    </Message>
  ) : null;
};