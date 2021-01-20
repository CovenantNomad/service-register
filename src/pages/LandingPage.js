import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { SettingContext } from '../context/SettingContext'
import { db } from '../config/firebaseConfig'

import Timer from '../components/Timer'
import WeekdayServiceButton from '../components/WeekdayServiceButton'
import SundayServiceButton from '../components/SundayServiceButton'
// import Footer from '../components/Footer'

const LandingPage = () => {
  const [ setting ] = useContext(SettingContext)
  const [ remainingWednesDay, setRemainingWednesDay ] = useState(70)
  const [ remainingFriDay, setRemainingFriDay ] = useState(70)
  const [ remainingSunDayFirst, setRemainingSunDayFirst ] = useState(70)
  const [ remainingSunDaySecond, setRemainingSunDaySecond ] = useState(70)
  const [ remainingSunDayThird, setRemainingSunDayThird ] = useState(40)
  const [ remainingSunDayFourth, setRemainingSunDayFourth ] = useState(70)

  useEffect(() => {
    if (setting.title === "수요예배") {
      db.collection("수요예배").doc('1부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
        const wednestempCount = doc.data().ReservationCount
        setRemainingWednesDay(wednestempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('수요예배 리스닝 분리')
    }

  }, [remainingWednesDay])

  useEffect(() => {
    if (setting.title === "금요성령집회") {
      db.collection("금요성령집회").doc('1부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
        const fridaytempCount = doc.data().ReservationCount
        setRemainingFriDay(fridaytempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('금요성령집회 리스닝 분리')
    }
  }, [remainingFriDay])

  useEffect(() => {
    if (setting.title === "주일예배") {
      db.collection("주일예배").doc('2부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
        const firsttempCount = doc.data().ReservationCount
        setRemainingSunDayFirst(firsttempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('주일예배 2부 리스닝 분리')
    }

  }, [remainingSunDayFirst])

  useEffect(() => {
    if (setting.title === "주일예배") {
      db.collection("주일예배").doc('3부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
        const secondtempCount = doc.data().ReservationCount
        setRemainingSunDaySecond(secondtempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('주일예배 3부 리스닝 분리')
    }

  }, [remainingSunDaySecond])
  
  useEffect(() => {
    if (setting.title === "주일예배") {
      db.collection("주일예배").doc('4부').collection(setting.reservationDate).doc('--stats--').onSnapshot((doc) => {
        const thirdtempCount = doc.data().ReservationCount
        setRemainingSunDayThird(thirdtempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('주일예배 4부 리스닝 분리')
    }

  }, [remainingSunDayThird])

  useEffect(() => {
    if (setting.title === "주일예배") {
      db.collection("주일예배").doc('6부').collection(setting.reservationDate.toString()).doc('--stats--').onSnapshot((doc) => {
        const forthtempCount = doc.data().ReservationCount
        setRemainingSunDayFourth(forthtempCount)
      }, (error) => {
        console.log("Error @ListenDB: ", error)
      })
    } else {
      console.log('주일예배 6부 리스닝 분리')
    }

  }, [remainingSunDayFourth])
  

  return (
    <Container>
      <Header>화양교회 예배신청 페이지</Header>
      <SubHeader>
        <div>아버지께서는 자기에게 이렇게 예배하는 자들을 찾으시느니라</div>
        <div>(요 4:23)</div>
      </SubHeader>

      <Timer />

      <WeekdayServiceButton 
        days="수요일"
        title="수요예배" 
        time="7시30분"
        open={setting.openWednesDay}
        remaining={remainingWednesDay} 
        linkTo="/service-register/wednesday"
      />

      {/* <WeekdayServiceButton 
        days="금요일" 
        title="금요성령집회" 
        time="8시00분"
        open={setting.openFriDay}
        remaining={remainingFriDay} 
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

      <SundayServiceButton 
        remaining={[remainingSunDayFirst, remainingSunDaySecond, remainingSunDayThird, remainingSunDayFourth]}
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