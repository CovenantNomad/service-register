import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { SettingContext } from '../context/SettingContext'
import { CounterContext } from '../context/CounterContext'
import { db } from '../config/firebaseConfig'

import Timer from '../components/Timer'
import ServiceButton from '../components/ServiceButton'
// import Footer from '../components/Footer'

const LandingPage = () => {
  const [ setting ] = useContext(SettingContext)
  const [ counter, setCounter ] = useContext(CounterContext)

  const remainingFirstRef = useRef(counter.remainingSunDayFirst)
  const remainingSecondRef = useRef(counter.remainingSunDaySecond)
  const remainingThirdRef = useRef(counter.remainingSunDayThird)
  const remainingFourthRef = useRef(counter.remainingSunDayFourth)

  useEffect(() => {
    db.collection(setting.title.toString()).doc('2부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
      const tempCount = doc.data().ReservationCount
      setCounter({
        ...counter,
        remainingSunDayFirst: tempCount})
    })

  }, [remainingFirstRef.current])

  useEffect(() => {
    db.collection(setting.title.toString()).doc('3부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
      const tempCount = doc.data().ReservationCount
      setCounter({
        ...counter,
        remainingSunDaySecond: tempCount})
    })

  }, [remainingSecondRef.current])
  
  useEffect(() => {
    db.collection(setting.title).doc('4부').collection(setting.reservationDate).doc('--stats--').onSnapshot((doc) => {
      const tempCount = doc.data().ReservationCount
      setCounter({
        ...counter,
        remainingSunDayThird: tempCount})
    })

  }, [remainingThirdRef.current])

  useEffect(() => {
    db.collection(setting.title.toString()).doc('6부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
      const tempCount = doc.data().ReservationCount
      setCounter({
        ...counter,
        remainingSunDayFourth: tempCount})
    })

  }, [remainingFourthRef.current])
  
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

      {/* <ServiceButton 
        days='금요일' 
        title='금요성령집회' 
        time={["8시00분"]}
        open={setting.openFriDay} 
        remaining={[counter.remainingFriDay]} 
        linkTo="/service-register/friday"
      /> */}

      <TempButton>
        <DateContainer>
          <div style={{fontSize: 24, fontWeight: 700}}>1월</div>
          <div style={{fontSize: 24, fontWeight: 700}}>22일</div>
          <div style={{fontSize: 12 }}>금요일</div>
        </DateContainer>
        <InfoContainer>
        <Title>
          <div style={{fontSize: 24, fontWeight: 700}} >금요성령집회</div>
        </Title>
        <div>이번주 금요성령집회는</div> 
        <div>프레이즈데이(청년집회) 관계로 </div> 
        <div>신청불가하며 온라인으로 참여해주세요</div>
        </InfoContainer>
      </TempButton>

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

const TempButton = styled.div`
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
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: black;
  border: 2px #228be6 solid;
  background: #228be6;
  padding: 1rem 0;
  border-radius: 9px;
`;
const InfoContainer = styled.div`
  flex: 3;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
`;
const Title = styled.div`
  padding-bottom: 1rem;
  color: black;
`;




export default LandingPage;