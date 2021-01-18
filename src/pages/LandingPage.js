import React, { useContext, useEffect } from 'react';
import styled from 'styled-components'
import { SettingContext } from '../context/SettingContext'
import { CounterContext } from '../context/CounterContext'
import { Firebase, db } from '../config/firebaseConfig'

import Timer from '../components/Timer'
import ServiceButton from '../components/ServiceButton'
// import Footer from '../components/Footer'


const LandingPage = () => {
  const [ setting, setSetting ] = useContext(SettingContext)
  const [ counter, setCounter ] = useContext(CounterContext)

  useEffect(() => {
    db.collection('수요예배').doc('1부').collection('20210120').doc('--stats--').onSnapshot((doc) => {
      const tempCount = doc.data().ReservationCount
      setCounter({
        ...counter,
        remainingWednesDay: tempCount})
    })
  }, [])

  
  return (
    <Container>
      <Header>화양교회 예배신청 페이지</Header>
      <SubHeader>
        <div>아버지께서는 자기에게 이렇게 예배하는 자들을 찾으시느니라</div>
        <div>(요 4:23)</div>
      </SubHeader>

      <Timer />

      <ServiceButton 
        days='수요일' 
        title='수요예배' 
        time={["7시30분"]}
        open={setting.openWednesDay} 
        remaining={[counter.remainingWednesDay]} 
        linkTo="/service-register/wednesday"
      />

      <ServiceButton 
        days='금요일' 
        title='금요성령집회' 
        time={["8시00분"]}
        open={setting.openFriDay} 
        remaining={[counter.remainingFriDay]} 
        linkTo="/service-register/friday"
      />

      <ServiceButton 
        days='일요일' 
        title='주일예배' 
        time={["8시00분", "9시30분", "11시00분", "16시00분"]}
        open={setting.openSunDay} 
        remaining={[counter.remainingSunDayFirst, counter.remainingSunDaySecond, counter.remainingSunDayThird, counter.remainingSunDayFourth]}
        linkTo="/service-register/sunday"
      />

      {/* <Footer /> */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  font-size: 2.25rem;
  font-weight: 700;

`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 2rem;
  font-size: 1rem;
  font-weight: 400;
  flex-wrap: wrap;
  width: 90%;
`;




export default LandingPage;