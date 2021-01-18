import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button;