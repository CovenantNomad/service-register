import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  /* margin: 1rem; */
  padding: 2rem;
  width: 40%;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

function LinkedButton({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default LinkedButton;