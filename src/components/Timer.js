import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components'
import { SettingContext } from '../context/SettingContext'

const Timer = ({ title, date }) => {
  const [ timerDays, setTimerDays ] = useState('00')
  const [ timerHours, setTimerHours ] = useState('00')
  const [ timerMinutes, setTimerMinutes ] = useState('00')
  const [ timerSeconds, setTimerSeconds ] = useState('00')
  const [ stop, setStop ] = useState(false)
  const [ setting, setSetting ] = useContext(SettingContext)

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = date.getTime()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(distance % (1000 * 60) / 1000)

      if (distance < 0 ) {
        // stop our timer
        clearInterval(interval)
        setStop(true)
        if (title === "수요예배") {
          setSetting({
            ...setting,
            openWednesDay: true
          })
        } else if (title === "금요성령집회") {
          setSetting({
            ...setting,
            openFriDay: true
          })
        } else if (title === "주일예배") {
          setSetting({
            ...setting,
            openSunDay: true
          })
        }
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  }

  useEffect(() => {
    if (title === "수요예배") {
      if (!setting.forcingCloseWed) {
        startTimer()
      }
      else {
        return
      }
    } else if (title === "금요성령집회") {
      if (!setting.forcingCloseFri) {
        startTimer()
      }
      else {
        return
      }
    } else if (title === "주일예배") {
      if (!setting.forcingCloseSun) {
        startTimer()
      }
      else {
        return
      }
    }
  }, [])

  return (
    <BackgroundContainer>
      <Title>{title} 신청까지</Title>
      <TimerContainer>  
        <SectionContainer>
          <Time>{timerDays}</Time>
          <Name>일</Name>
        </SectionContainer>
        <SectionContainer>
          <Time>{timerHours}</Time>
          <Name>시간</Name>
        </SectionContainer>
        <SectionContainer>
          <Time>{timerMinutes}</Time>
          <Name>분</Name>
        </SectionContainer>
        <SectionContainer>
          <Time>{timerSeconds}</Time>
          <Name>초</Name>
        </SectionContainer>
      </TimerContainer>
  </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  background-color: #73c6c9;
  /* box-sizing: border-box; */
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 1rem;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  margin: 12px 0;
`;

const SectionContainer = styled.div``;

const Time = styled.div`
  display:flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  display:flex;
  justify-content: center;
`;

export default React.memo(Timer);