import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { Firebase, db } from '../../config/firebaseConfig'

import NavBar from '../../components/NavBar'

const FridayService = (props) => {
  const [ disabled, setDisabled ] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  console.log(props)

  const reservationDate = '20210122fri'
  const increment = Firebase.firestore.FieldValue.increment(1)
  const statsRef = db.collection(reservationDate).doc('--stats--');
  const newuserRef = db.collection(reservationDate).doc();

  const batch = db.batch();

  // 초기화 관리자에서 진행해야겠다.
  // if (!statsDoc.exists) {
  //   statsRef.set({ storyCount: 0 })
  // } 


  const onSubmit = data => {
    const submitData = {
      ...data,
      submitTime: new Date()
    }
    return db.runTransaction((transaction) => {
      return transaction.get(statsRef).then((statsDoc) => {
        if (statsDoc.data().storyCount < 20){
          batch.set(newuserRef, submitData);
          batch.set(statsRef, { storyCount: increment }, {merge: true})
          batch.commit()
          return submitData
        } else {
          setDisabled(true)
          alert('신청인원이 넘어 마감되었습니다')
          return Promise.reject('실패')
        }
      })
    }).then(() => {
      alert('예배신청에 성공했습니다')
      setDisabled(true)
    }).catch((error) => {
      console.log(error)
    })
  }

  let latestDay = new Date();
  latestDay.setDate(latestDay.getDate() + (5 + 7 - latestDay.getDay()) % 7);

  return (
    <Container>
      <NavBar />
      <Header>{latestDay.getMonth()+1}월 {latestDay.getDate()}일 금요성령집회 신청</Header>
      <InserForm onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column'}}>
        <InputContainer>
          <Title>이름</Title>
          <Input name="name" placeholder="이름을 입력해주세요" ref={register({ required: true})}/>
          {errors.name && <text style={{color: 'red', marginTop: 5, marginLeft: 5}}>이름을 입력해주세요</text>}
        </InputContainer>
        <InputContainer>
          <Title>직분</Title>
          <Input name="position" placeholder="장로/권사/집사/성도/청년/학생" ref={register({ required: true})} />
          {errors.position && <text style={{color: 'red', marginTop: 5, marginLeft: 5}}>직분을 입력해주세요</text>}
        </InputContainer>
        <InputContainer>
          <Title>소속</Title>
          <Input name="division" placeholder="남선교회/여선교회/시니어/청장년/영커플/인터치" ref={register({ required: true})}/>
          {errors.division && <text style={{color: 'red', marginTop: 5, marginLeft: 5}}>소속을 입력해주세요</text>}
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit" disabled={disabled}>예배신청하기</SubmitButton>
        </InputContainer>
      </InserForm>
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
  margin: 1.5rem 0 0;
  font-size: 2rem;
  font-weight: 700;
`;

const InserForm = styled.form`
  padding: 1rem;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Title = styled.label`
  width: 100%;
  margin-bottom: 0.4rem;
  font-size: 1rem;
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 2px solid #228be6;
  padding: 0.75rem;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem 0;
  color: #fff;
  background-color: #228be6;
  border: 2px solid #228be6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
`;

export default FridayService;