import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LinkedButton from '../components/LinkedButton'

// const VIEW_HEIGHT = window.innerHeight

const LandingPage = () => {
  const [ openWed, setOpenWed ] = useState(false)
  const [ openFri, setOpenFri ] = useState(false)
  const [ openSun, setOpenSun ] = useState(false)

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('Dec 27, 2020 18:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0 ) {
        // stop our timer
        clearInterval(interval)
        setOpenWed(true)
      } 
    }, 1000);
  }

  useEffect(() => {
    startTimer()
  }, [openWed, openFri, openSun])

  const handleClickWed = (e) => {
    if (!openWed) {
      e.preventDefault()
    }
  }

  const handleClickFri = (e) => {
    if (!openFri) {
      e.preventDefault()
    }
  }

  const handleClickSun = (e) => {
    if (!openSun) {
      e.preventDefault()
    }
  }

  return (
    <Container>
      <Header>화양교회 예배신청 페이지</Header>
      <SubHeader>태초에 하나님이 천지를 창조하시니라 (창 1:1)</SubHeader>

      <LinkedButton to="/wednesday" onClick={handleClickWed} style={{margin: '20px 0'}}>
        <IconContainer>
          <AssignmentTurnedInIcon />
        </IconContainer>
        <TextContainer>
        <text style={{fontSize: 24, marginBottom: 10}}>수요예배</text>
          {openWed ? (
            <text style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>예배신청이 가능합니다</text>
          ) : (
            <text style={{fontSize: 16, fontWeight: 400, color:'black'}}>예배 신청 전입니다</text>
          )}
        </TextContainer>
      </LinkedButton>

      <LinkedButton to="/friday" onClick={handleClickFri} style={{margin: '20px 0'}}>
        <IconContainer>
          <AssignmentTurnedInIcon />
        </IconContainer>
        <TextContainer>
        <text style={{fontSize: 24, marginBottom: 10}}>금요예배</text>
          {openFri ? (
            <text style={{fontSize: 16, fontWeight: 400, color:'#8022D9'}}>예배신청이 가능합니다</text>
          ) : (
            <text style={{fontSize: 16, fontWeight: 400, color:'black'}}>예배 신청 전입니다</text>
          )}
        </TextContainer>
      </LinkedButton>

      <LinkedButton to="/sunday" onClick={handleClickSun} style={{margin: '20px 0'}}>
        <IconContainer>
          <AssignmentTurnedInIcon />
        </IconContainer>
        <TextContainer>
          <text style={{fontSize: 24, marginBottom: 10}}>주일예배</text>
          {openSun ? (
            <text style={{fontSize: 16, fontWeight: 400, color:'red'}}>예배신청이 가능합니다</text>
          ) : (
            <text style={{fontSize: 16, fontWeight: 400, color:'black'}}>예배 신청 전입니다</text>
          )}
        </TextContainer>
      </LinkedButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px 0 0;
  font-size: 32px;
  font-weight: 700;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px 0 24px;
  font-size: 14px;
  font-weight: 400;
`;

const IconContainer = styled.div`
  flex: 1;
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;



export default LandingPage;