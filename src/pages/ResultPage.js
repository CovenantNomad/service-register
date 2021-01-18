import React from 'react';
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

import NavBar from '../components/NavBar'
import LinkedButton from '../components/LinkedButton'

const VIEW_HEIGHT = window.innerHeight

const ResultPage = () => {
  const location = useLocation();
  const result = location.state
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
        <LinkedButton 
          to="/service-register/main"
          style={{
            textDecoration: 'none', 
            color:'#222', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: 6,
            marginTop: '1.5rem'
            }}
        >
          처음화면으로
        </LinkedButton>
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

export default ResultPage;