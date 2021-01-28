import React, { useContext } from 'react';
import styled from 'styled-components'

import LinkedButton from './LinkedButton'

const SundayServiceButton = ({ open, remaining, total, comments, linkTo}) => {

  let latestDay = new Date();
  latestDay.setDate(latestDay.getDate() + (0 + 7 - latestDay.getDay()) % 7);

  const handleClick = (e) => {
    if (!open) {
      e.preventDefault()
    } else if (open && remaining[0] <= 0 && remaining[1] <= 0 && remaining[2] <= 0 && remaining[3] <= 0 && remaining[4] <= 0) {
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
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining[0] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[0] < 0 ? 0 : remaining[0]}/{total[0]}
                {comments[0] ? (
                  <div style={{color: "#72BCEB"}}>{comments[0]}</div>
                ) : (
                  <div></div>
                )}
              </CounterContainer>
            </BodyContainer>

            <BodyContainer>
              <TimeContainer>
                <div>2부</div>
                <div>8시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining[1] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[1] < 0 ? 0 : remaining[1]}/{total[1]}
                {comments[1] ? (
                  <div style={{color: "#72BCEB"}}>{comments[1]}</div>
                ) : (
                  <div></div>
                )}
              </CounterContainer>
            </BodyContainer>
            <BodyContainer>
              <TimeContainer>
                <div>3부</div>
                <div>9시30분</div>
              </TimeContainer>
              <AvailableContainer>
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining[2] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[2] < 0 ? 0 : remaining[2]}/{total[2]}
                {comments[2] ? (
                  <div style={{color: "#72BCEB"}}>{comments[2]}</div>
                ) : (
                  <div></div>
                )}
              </CounterContainer>
            </BodyContainer>
            
            <BodyContainer>
              <TimeContainer>
                <div>4부</div>
                <div>11시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining[3] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                <div>{remaining[3] < 0 ? 0 : remaining[3]}/{total[3]}</div>
                {comments[3] ? (
                  <div style={{color: "#72BCEB"}}>{comments[3]}</div>
                ) : (
                  <div></div>
                )}
              </CounterContainer>
            </BodyContainer>
            
            <BodyContainer>
              <TimeContainer>
                <div>6부 (영상)</div>
                <div>4시00분</div>
              </TimeContainer>
              <AvailableContainer>
                {!open ? (
                  <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청대기</div>
                ):(
                  <>
                  {open && remaining[4] > 0 ? (
                    <div style={{fontSize: 16, fontWeight: 400, color:'#F97878'}}>신청가능</div>
                  ) : (
                    <div style={{fontSize: 16, fontWeight: 400, color:'black'}}>신청완료</div>
                  )}
                  </>
                )}
              </AvailableContainer>
              <CounterContainer>
                {remaining[4] < 0 ? 0 : remaining[4]}/{total[4]}
                {comments[4] ? (
                  <div style={{color: "#72BCEB"}}>{comments[4]}</div>
                ) : (
                  <div></div>
                )}
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
  margin-top: 0.5rem;
  padding-bottom: 1.5rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
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