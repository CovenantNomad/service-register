import React, { useContext } from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import { auth } from '../config/firebaseConfig'

import NavBarForAdmin from '../components/NavBarForAdmin'



const AuthPage = () => {
  const { register, handleSubmit, errors } = useForm()
  const [ isLoggedIn, setIsLoggedIn ] = useContext(UserContext)
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password)
      console.log("LOGIN SUCCESS")
      setIsLoggedIn(true)
      history.push({
        pathname: "/service-register/admin", 
      })
    } catch (error) {
      console.log("Error @SignIn: ", error)
   }
  }

  return (
    <Container>
      <NavBarForAdmin />
      <Header>관리자 페이지 로그인</Header>
      <InserForm onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column'}}>
        <InputContainer>
          <Title>이메일</Title>
          <Input name="email" ref={register({ required: true})}/>
          {errors.email && <div style={{color: 'red', marginTop: 5, marginLeft: 5}}>이메일을 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <Title>비밀번호</Title>
          <Input name="password" type="password" ref={register({ required: true})} />
          {errors.password && <div style={{color: 'red', marginTop: 5, marginLeft: 5}}>비밀번호를 입력해주세요</div>}
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit">관리자 로그인</SubmitButton>
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

export default AuthPage;