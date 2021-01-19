import React, { useState } from 'react';
import styled from 'styled-components'
import { db } from '../config/firebaseConfig'

import NavBar from '../components/NavBar'
import Button from '../components/Button'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function fillZero(width, str){
  return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
}

const AdminPage = () => {
  const [ userlist, setUserlist ] = useState()
  const batch = db.batch();
  
  let wednesday = new Date();
  wednesday.setDate(wednesday.getDate() + (3 + 7 - wednesday.getDay()) % 7);
  const wednesdayString = `${wednesday.getFullYear()}${fillZero(2, (wednesday.getMonth()+1).toString())}${wednesday.getDate()}`

  let friday = new Date();
  friday.setDate(friday.getDate() + (5 + 7 - friday.getDay()) % 7);
  const fridayString = `${friday.getFullYear()}${fillZero(2, (friday.getMonth()+1).toString())}${friday.getDate()}`

  let sunday = new Date();
  sunday.setDate(sunday.getDate() + (0 + 7 - sunday.getDay()) % 7);
  const sundayString = `${sunday.getFullYear()}${fillZero(2, (sunday.getMonth()+1).toString())}${sunday.getDate()}`

  

  const onClickWednesDay = () => {
      const wedRef = db.collection('수요예배').doc('1부').collection(wednesdayString).doc('--stats--')
      batch.set(wedRef, { ReservationCount: 70 })
      const settingRef = db.collection('디비세팅').doc('최신일자')
      batch.update(settingRef, {
        title: "수요예배",
        reservationDate: wednesdayString.toString()
      })
      batch.commit()
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
  }

  const onClickFriDay = () => {
    const friRef = db.collection('금요성령집회').doc('1부').collection(fridayString).doc('--stats--')
    batch.set(friRef, { ReservationCount: 70 })
    const settingRef = db.collection('디비세팅').doc('최신일자')
    batch.update(settingRef, {
      title: "금요성령집회",
      reservationDate: fridayString.toString()
    })
    batch.commit()
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

  const onClickSunDay = () => {
    const secondRef = db.collection('주일').doc('2부').collection(sundayString).doc('--stats--')
    batch.set(secondRef, { ReservationCount: 70 })
    const thirdRef = db.collection('주일').doc('3부').collection(sundayString).doc('--stats--')
    batch.set(thirdRef, { ReservationCount: 70 })
    const forthRef = db.collection('주일').doc('4부').collection(sundayString).doc('--stats--')
    batch.set(forthRef, { ReservationCount: 70 })
    const sixthRef = db.collection('주일').doc('6부').collection(sundayString).doc('--stats--')
    batch.set(sixthRef, { ReservationCount: 70 })
    const settingRef = db.collection('디비세팅').doc('최신일자')
    batch.update(settingRef, {
      title: "주일예배",
      reservationDate: sundayString.toString()
    })
    batch.commit()
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }

  const onClickLookUp = () => {
    db.collection('수요예배').doc('1부').collection('20210120').onSnapshot((snapshot) => {
      const tempArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setUserlist(tempArray)
    })
  }

  const cleanUpList = userlist.filter(item => item.id !== "--stats--")

  const converTime = (timestamp) => {
    let date = new Date(timestamp * 1000)
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }

  return (
    <Container>
      <NavBar />
      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 24, marginTop: 24, backgroundColor:'lightgray', padding: 10}}>신청 전 예배DB 리셋하기</div>
      <SettingContainer>
        <Setting>
          <Title>수요예배 DB세팅</Title>
          <Button onClick={() => onClickWednesDay()}>{wednesday.getFullYear()}년 {wednesday.getMonth()+1}월 {wednesday.getDate()}일</Button>
        </Setting>
        <Setting>
          <Title>금요성령집회 DB세팅</Title>
          <Button onClick={() => onClickFriDay()}>{friday.getFullYear()}년 {friday.getMonth()+1}월 {friday.getDate()}일</Button>
        </Setting>
        <Setting>
          <Title>주일예배 DB세팅</Title>
          <Button onClick={() => onClickSunDay()}>{sunday.getFullYear()}년 {sunday.getMonth()+1}월 {sunday.getDate()}일</Button>
        </Setting>
      </SettingContainer>

      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 28, marginTop: 28, backgroundColor:'lightgray', padding: 10}}>신청자 명단 확인</div>
      <LookupButton onClick={onClickLookUp}>조회</LookupButton>

      <TableContainer component={Paper}>
        <Table aria-label="simple table" style={{minWidth: 250}}>
          <TableHead>
            <TableRow>
              <TableCell align="center">순서</TableCell>
              <TableCell align="center">이름</TableCell>
              <TableCell align="center">직분</TableCell>
              <TableCell align="center">소속(선교회)</TableCell>
              <TableCell align="center">시간</TableCell>
            </TableRow>
          </TableHead>
          {userlist && (
            <>
            {cleanUpList.map((user, index) => (
              <TableBody>
                <TableRow key={user.id}>
                  <TableCell align="center">{index}</TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.position}</TableCell>
                  <TableCell align="center">{user.division}</TableCell>
                  <TableCell align="center">{converTime(user.submitTime)}</TableCell>
                </TableRow>
              </TableBody>
            ))}  
            </>
          )}
        </Table>
      </TableContainer>
    </Container>
    
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const SettingContainer = styled.div``;

const Setting = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 150px;

`;

const LookupButton = styled.button`
  border: 2px solid #228be6;
  padding: 1rem;
  margin-bottom: 1rem;
`;




export default AdminPage;