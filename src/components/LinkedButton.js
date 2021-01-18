import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Link)`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  width: 90%;
  text-decoration: none;
  background: #fff;
  border: 2px #228be6 solid;
  &:hover {
    border: 2px red solid;
  }
  /* &:active {
    background: #1c7ed6;
    border: 2px #fff solid;
  } */
  
`;

function LinkedButton({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default LinkedButton;