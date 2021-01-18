import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background: #228be6;
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button;