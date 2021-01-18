import React from 'react'
import { BrowserRouter, Switch, Route  } from "react-router-dom";
// import CssBaseline from '@material-ui/core/CssBaseline';
import styled, { createGlobalStyle } from "styled-components";

import NavBar from './components/NavBar'

import LandingPage from './pages/LandingPage'
// import LandingPage2 from './pages/LadingPage2'
import SundayService from './pages/services/SundayService'
import WednesdayService from './pages/services/WednesdayService'
import FridayService from './pages/services/FridayService'
import ReservationPage from './pages/ReservationPage'

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Container>
          <GlobalStyle />
            <Switch>
              <Route exact path={'/wednesday'} component={WednesdayService} />
              <Route exact path={'/friday'} component={FridayService} />
              <Route exact path={'/sunday'} component={SundayService} />
              <Route exact path={'/reservation'} component={ReservationPage} />
              <Route exact path={'/service-register'} component={LandingPage} />
            </Switch>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }
`;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  `;

  const Container = styled.div`
    width: 100%;
    max-width: 585px;
    display: flex;
    flex-direction: column;
  `;





export default App;
