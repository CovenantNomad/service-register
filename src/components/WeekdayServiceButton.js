import React from 'react';
import styled from 'styled-components'

import LinkedButton from './LinkedButton'

const WeekdayServiceButton = ({ days, title, time, open, forcingClose, remaining, total, linkTo, comments }) => {

  const getDays = (days) => {
    if (days === '수요일') {
      return 3
    } else if (days === '금요일') {
      return 5
    } 
  }

  let latestDay = new Date();
  latestDay.setDate(latestDay.getDate() + (getDays(days) + 7 - latestDay.getDay()) % 7);

  const handleClick = (e) => {
    if (!open) {
      e.preventDefault()
    } else if (open && remaining <= 0) {
      e.preventDefault()
    }
  }

  return (
    <LinkedButton to={linkTo} style={{margin: '20px 0'}} onClick={handleClick}>
      <DateContainer>
        <div style={{fontSize: 24, fontWeight: 700}}>{latestDay.getMonth()+1}월</div>
        <div style={{fontSize: 24, fontWeight: 700}}>{latestDay.getDate()}일</div>
        <div style={{fontSize: 12 }}>{days}</div>
      </DateContainer>
      <InfoContainer>
        <Header>
          <div style={{fontSize: 24, fontWeight: 700}} >{title}</div>
        </Header>
        {comments !== "" ? (
          <div>{comments}</div>
        ) : (
          <>
          <BodyContainer>
          <TimeContainer>
            <div>저녁</div>
            <div>{time}</div>
          </TimeContainer>
          <AvailableContainer>
            {forcingClose ? (
              <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
            ) : (
              <>
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>테스트중</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </>
            )}            
          </AvailableContainer>
          <CounterContainer>
            {remaining < 0 ? 0 : remaining}/{total}명
          </CounterContainer>
        </BodyContainer>
        </>
        )}
        
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
  color: #fff;
  border: 2px #228be6 solid;
  background: #228be6;
  padding: 1rem 0;
  border-radius: 9px;
`;
const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
`;
const Header = styled.div`
  padding-bottom: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BodyContainer = styled.div`
  display: flex;
  color: black;
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
  align-items: flex-end;
`;
const CounterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export default WeekdayServiceButton;