import React, { useContext } from 'react';
import styled from 'styled-components'

import { SettingContext } from '../context/SettingContext'
import LinkedButton from './LinkedButton'

const SundayServiceButton = ({ remaining, linkTo}) => {
  const [ setting ] = useContext(SettingContext)

  let latestDay = new Date();
  latestDay.setDate(latestDay.getDate() + (0 + 7 - latestDay.getDay()) % 7);

  const handleClick = (e) => {
    if (!setting.openSunDay) {
      e.preventDefault()
    } else if (setting.openSunDay && remaining[0] <= 0 && remaining[1] <= 0 && remaining[2] <= 0 && remaining[3] <= 0 && remaining[4] <= 0) {
      e.preventDefault()
    }
  }

  return (
    <LinkedButton to={linkTo} style={{margin: '20px 0'}} onClick={handleClick}>
      <DateContainer>
        <div style={{fontSize: 24, fontWeight: 700}}>{latestDay.getMonth()+1}월</div>
        <div style={{fontSize: 24, fontWeight: 700}}>{latestDay.getDate()}일</div>
        <div style={{fontSize: 12 }}>주일</div>
      </DateContainer>
      <InfoContainer>
        <Header>
          <div style={{fontSize: 24, fontWeight: 700}} >주일예배</div>
        </Header>
          <div style={{display: 'flex', flexDirection:'column'}}>
            <BodyContainer>
              <TimeContainer>
                <div>1부 (영상)</div>
                <div>7시10분</div>
              </TimeContainer>
              <AvailableContainer>
                {!setting.openSunDay ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {setting.openSunDay && remaining[0] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[0] < 0 ? 0 : remaining[0]}/70명
              </CounterContainer>
            </BodyContainer>

            <BodyContainer>
              <TimeContainer>
                <div>2부</div>
                <div>8시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!setting.openSunDay ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {setting.openSunDay && remaining[1] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[1] < 0 ? 0 : remaining[1]}/70명
              </CounterContainer>
            </BodyContainer>
            <BodyContainer>
              <TimeContainer>
                <div>3부</div>
                <div>9시30분</div>
              </TimeContainer>
              <AvailableContainer>
                {!setting.openSunDay ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {setting.openSunDay && remaining[2] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[2] < 0 ? 0 : remaining[2]}/70명
              </CounterContainer>
            </BodyContainer>
            
            <BodyContainer>
              <TimeContainer>
                <div>4부</div>
                <div>11시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!setting.openSunDay ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {setting.openSunDay && remaining[3] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                <div>{remaining[3] < 0 ? 0 : remaining[3]}/40명</div>
                <div style={{color: "#72BCEB"}}>선교회장 임명식</div>
              </CounterContainer>
            </BodyContainer>
            
            <BodyContainer>
              <TimeContainer>
                <div>6부 (영상)</div>
                <div>4시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!setting.openSunDay ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {setting.openSunDay && remaining[4] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[4] < 0 ? 0 : remaining[4]}/70명
              </CounterContainer>
            </BodyContainer>
          </div>
      </InfoContainer>
    </LinkedButton>
  )
}

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
const Header = styled.div`
  padding-bottom: 1rem;
  color: black;
`;
const BodyContainer = styled.div`
  display: flex;
  color: black;
  margin-bottom: 1rem;
`;
const TimeContainer = styled.div`
  margin-right: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AvailableContainer = styled.div`
  margin-right: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
`;
const CounterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default SundayServiceButton;