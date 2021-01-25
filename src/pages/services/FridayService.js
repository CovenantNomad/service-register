import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { SettingContext } from '../../context/SettingContext'

import NavBar from '../../components/NavBar'
// import { Radio, RadioGroup, FormControlLabel} from '@material-ui/core';

const FridayService = (props) => {
  const [ setting, setSetting ] = useContext(SettingContext)
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory();

  let latestDay = new Date();
  latestDay.setDate(latestDay.getDate() + (3 + 7 - latestDay.getDay()) % 7);

  const onSubmit = (data) => {
    if (!setting.isSubmitting) {

      setSetting({
        ...setting,
        isSubmitting: true,
      })

      const submitData = {
        ...data,
        title: '금요성령집회',
        time: '1부',
        date: setting.friday,
        submitTime: new Date()
      }
      history.push({
        pathname: "/service-register/result", 
        payload: submitData
      })
      console.log(submitData)
      console.log('제출하였습니다')
    } else {
      console.log('제출중입니다')
    }
  }

  return (
    <Container>
      <NavBar />
      <Header>{latestDay.getMonth()+1}월 {latestDay.getDate()}일 수요예배 신청</Header>
      <InserForm onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column'}}>
        <InputContainer>
          <Title>이름</Title>
          <Input name="name" placeholder="이름을 입력해주세요" ref={register({ required: true, maxLength: 4 })}/>
          {errors.name && <div style={{color: 'red', marginTop: 5, marginLeft: 5}}>한 사람 본인 이름만 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <Title>직분</Title>
          <Input name="position" placeholder="장로/권사/집사/성도/청년/학생" ref={register({ required: true })} />
          {errors.position && <div style={{color: 'red', marginTop: 5, marginLeft: 5}}>직분을 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <Title>소속</Title>
          <Input name="division" placeholder="남선교회/여선교회/시니어/청장년/영커플/인터치" ref={register({ required: true })}/>
          {errors.division && <div style={{color: 'red', marginTop: 5, marginLeft: 5}}>소속을 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit" disabled={setting.isSubmitting}>예배신청하기</SubmitButton>
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