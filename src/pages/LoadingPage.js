import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { SettingContext } from '../context/SettingContext'
import { db } from '../config/firebaseConfig'
import styled from 'styled-components'

const LoadingPage = () => {
  const [ setting, setSetting ] = useContext(SettingContext)
  const history = useHistory();

  const initialize = async () => {
    const settingRef = db.collection('setting').doc('latest')
    await settingRef.get().then((doc) => {
      if (doc.exists) {
        setSetting({
          ...setting,
          init: true,
          isWeekday: doc.data().isWeekday,
          wednesday: doc.data().wednesday,
          friday: doc.data().friday,
          sunday: "",
          TimerWednesDay: doc.data().TimerWednesDay,
          TimerFriDay: doc.data().TimerFriDay,
          TimerSunDay: "",
          forcingCloseWed: doc.data().forcingCloseWed,
          forcingCloseFri: doc.data().forcingCloseFri,
          forcingCloseSun: false,
          wednesDaySeats: doc.data().wednesDaySeats,
          fridaySeats: doc.data().fridaySeats,
          sundayOneSeats: doc.data().sundayOneSeats,
          sundayTwoSeats: doc.data().sundayTwoSeats,
          sundayThreeSeats: doc.data().sundayThreeSeats,
          sundayFourSeats: doc.data().sundayFourSeats,
          sundaySixSeats: doc.data().sundaySixSeats,
          commentWed: doc.data().commentWed,
          commentFri: doc.data().commentFri,
          commentSunOne: doc.data().commentSunOne,
          commentSunTwo: doc.data().commentSunTwo,
          commentSunThree: doc.data().commentSunThree,
          commentSunFour: doc.data().commentSunFour,
          commentSunSix: doc.data().commentSunSix,
        })
        console.log("세팅업데이트 성공");
      } else {
        console.log("데이터가 없습니다.")
      }
    }).catch((error) => {
      console.log("Errors @initialize: ", error)
    })
  }

  useEffect(() => {
    console.log('무한루프체크')
    initialize()
    .then(()=>{
      history.push({
        pathname: "/service-register/main"
      })
    })
  }, [])

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