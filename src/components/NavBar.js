import React, { useContext } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {
  const [ isLoggedIn, _ ] = useContext(UserContext)

  return (
    <AppBar>
      {/* <IconContainer to="/service-register/main">
        <ArrowBackIcon fontSize='small'/>
      </IconContainer> */}
      <LogoText>ANOINTING HWAYANG</LogoText>
      <IconContainer to={isLoggedIn ? "/service-register/admin": "/service-register/auth"}>
        <SettingsIcon fontSize='small'/>
      </IconContainer>
  </AppBar>
  )
}

const AppBar = styled.div`
  z-index: 5;
  width: 100%;
  max-width: 585px;
  height: 50px;
  background-color: #228be6;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const IconContainer = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
  padding: 0.5rem;
`;

const LogoText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  flex: 1;
  margin-left: 1rem;
`;


export default React.memo(NavBar);