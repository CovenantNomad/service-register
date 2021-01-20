import React from 'react';
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

import NavBar from '../components/NavBar'

const VIEW_HEIGHT = window.innerHeight

const ResultPage = () => {
  const location = useLocation();
  const result = location.state

  const onClickClose = () => {
    window.open('','_self').close(); 
    // 모바일에서 페이지 닫기
    window.location.href="kakaotalk://inappbrowser/close"
  }

  return (
    <Container>
      <NavBar />
      <ResultContainer style={{height: VIEW_HEIGHT}}>
        {result.result ? (
          <>
            <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{result.detail.name} {result.detail.position}님 </div>
            <div style={{fontSize: '1.5rem', marginBottom: '2rem', color: 'blue'}}>예배신청에 성공하셨습니다.</div>
            <div>많은 은혜 받으시길 바랍니다</div>
          </>
        ) : (
          <>
          <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{result.detail.name} {result.detail.position}님</div>
          <div style={{fontSize: '1.5rem', marginBottom: '2rem', color: 'blue'}}>죄송합니다.</div>
          <div>예배신청이 마감되었습니다.</div>
          </>
        )}
        <CloseButton onClick={onClickClose}>페이지 닫기</CloseButton>
        <div>뒤로 가기 버튼만 누르지 마시고 창을 닫아 주세요 *^^*</div>
        <div>담당교역자가 개인별로 오늘 10시안에 확인 메시지 보내 드리겠습니다</div>

      </ResultContainer>
      
    </Container>

  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  margin: 20px 0;
  border: 2px solid #228be6;
  color: #222;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ResultPage;