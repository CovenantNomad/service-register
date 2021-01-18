import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      {'© '}
      {new Date().getFullYear()}
      <FooterLink to="/service-register/reservation">&nbsp;ANOINTING HWAYANG</FooterLink>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FooterLink = styled(Link)`
  border: none;
  text-decoration: none;
  color: black;
  cursor: default;
`;

export default React.memo(Footer);