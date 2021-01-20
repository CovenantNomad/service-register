import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { SettingContext } from '../context/SettingContext'
import { db } from '../config/firebaseConfig'

const LoadingPage = () => {
  const [ setting, setSetting ] = useContext(SettingContext)
  const history = useHistory();

  const initialize = async () => {
    const settingRef = db.collection('디비세팅').doc('최신일자')
    await settingRef.get().then((doc) => {
      if (doc.exists) {
        setSetting({
          ...setting,
          init: true,
          title: doc.data().title,
          reservationDate: doc.data().reservationDate
        })
        console.log("세팅업데이트 성공");
      } else {
        console.log("데이터가 없습니다.")
      }
    }).catch((error) => {
      console.log("@initialize Errors: ", error)
    })
  }

  useEffect(() => {
    console.log('무한루프체크')
    if (!setting.init) {
      initialize()
      .then(()=>{
        history.push({
          pathname: "/service-register/main"
        })
      })}
  })

  console.log(setting)

  return (
    <Container>
      <div>화양교회 예배신청 페이지입니다</div>
      <div>잠시만 기다려 주세요</div>
    </Container>
    
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;