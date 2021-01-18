import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <AppBar>
    <LogoContainer>
      <LogoText>
        {/* <Logo src={logo} /> */}
        ANOINTING HWAYANG
      </LogoText>
    </LogoContainer>
  </AppBar>
  )
}

const AppBar = styled.nav`
  position: fixed;
  z-index: 5;
  width: 100%;
  max-width: 767px;
  height: 60px;
  background-color: #24A6D9;
  display: flex;
  /* padding: 0 20px;
  box-sizing: border-box; */
  border-bottom: 1px solid #e8e8e8;
`;

const LogoContainer = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
`;


export default NavBar;