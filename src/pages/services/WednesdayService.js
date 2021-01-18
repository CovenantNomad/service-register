import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { Firebase, db } from '../../config/firebaseConfig'



const WednesdayService = () => {
  const [ disabled, setDisabled ] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const reservationDate = '20210120wed'
  const increment = Firebase.firestore.FieldValue.increment(1)
  const statsRef = db.collection(reservationDate).doc('--stats--');
  const newuserRef = db.collection(reservationDate).doc();

  const batch = db.batch();

  // const onSubmit = data => {
  //   const submitData = {
  //     ...data,
  //     submitTime: new Date()
  //   }
  //   batch.set(newuserRef, submitData);
  //   batch.set(statsRef, { storyCount: increment }, {merge: true})
  //   batch.commit()
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

  return (
    <Container>
      <Header>1월 20일 수요예배 신청</Header>
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
          <Input name="division" placeholder="남선교회/여선교회/시니어/청장년/영커플/청년" ref={register({ required: true})}/>
          {errors.division && <text style={{color: 'red', marginTop: 5, marginLeft: 5}}>소속을 입력해주세요</text>}
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit" disabled={disabled}>예배신청하기</SubmitButton>
        </InputContainer>
      </InserForm>

      <Footer>
        {'© '}
        {new Date().getFullYear()}
        <FooterButton to="/reservation">&nbsp;ANOINTING HWAYANG</FooterButton>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px 0 0;
  font-size: 32px;
  font-weight: 700;
`;

const InserForm = styled.form`
  padding: 12px;
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
`;

const Title = styled.label`
  width: 100%;
  margin-bottom: 6px;
  font-size: 16px;
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  border-radius:4px;
  border: 2px solid #228be6;
  padding: 12px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  color: #fff;
  background-color: #228be6;
  border: 2px solid #228be6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FooterButton = styled.div`
  border: none;
  text-decoration: none;
  cursor: default;
`;

export default WednesdayService;