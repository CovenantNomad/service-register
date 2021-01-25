import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { db } from '../config/firebaseConfig'

import NavBarForAdmin from '../components/NavBarForAdmin'
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
  const [ userlist, setUserlist ] = useState(false)
  const [ latestSetting, setLatestSetting ] = useState(null)
  const [ forcingCloseWed, setForcingCloseWed ] = useState(false)
  const [ forcingCloseFri, setForcingCloseFri ] = useState(false)
  const [ forcingCloseSun, setForcingCloseSun ] = useState(false)
  const [ seats, setSeats ] = useState({
    wednesDay: 70,
    friday: 70,
    sundayOne: 70,
    sundayTwo: 70,
    sundayThree: 70,
    sundayFour: 70,
    sundaySix: 70,
  })
  const [ comments, setComments ] = useState({
    commentWed: "",
    commentFri: "",
    commentSunOne: "",
    commentSunTwo: "",
    commentSunThree: "",
    commentSunFour: "",
    commentSunSix: "",
  })

  const loadSettings = () => {
    db.collection('setting').doc('latest').get().then((doc) => {
      if (doc.exists) {
        console.log("Setting data:", doc.data());
        setLatestSetting(doc.data())
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error @loadSettings: ", error)
    })
  }

  useEffect(() => {
    console.log('세팅값 불러오는 중')
    if (latestSetting === null) {
      loadSettings()
    }
  }, [latestSetting])



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

  

  const onClickWeekday = () => {
      const wedRef = db.collection('수요예배').doc('1부').collection(wednesdayString).doc('--stats--')
      const friRef = db.collection('금요성령집회').doc('1부').collection(fridayString).doc('--stats--')
      const settingRef = db.collection('setting').doc('latest')
      batch.set(wedRef, { ReservationCount: seats.wednesDay })
      batch.set(friRef, { ReservationCount: seats.friday })
      batch.update(settingRef, {
        isWeekday: true,
        wednesday: wednesdayString,
        friday: fridayString,
        sunday: "",
        TimerWednesDay: [wednesday.getFullYear(), wednesday.getMonth(), wednesday.getDate()-1, 19],
        TimerFriDay: [friday.getFullYear(), friday.getMonth(), friday.getDate()-3, 20],
        TimerSunDay: "",
        forcingCloseWed: forcingCloseWed,
        forcingCloseFri: forcingCloseFri,
        forcingCloseSun: false,
        wednesDaySeats: seats.wednesDay,
        fridaySeats: seats.friday,
        sundayOneSeats: "",
        sundayTwoSeats: "",
        sundayThreeSeats: "",
        sundayFourSeats: "",
        sundaySixSeats: "",
        commentWed: comments.commentWed,
        commentFri: comments.commentFri,
        commentSunOne: "",
        commentSunTwo: "",
        commentSunThree: "",
        commentSunFour: "",
        commentSunSix: "",
      })
      batch.commit()
      .then(() => {
        console.log("Document successfully written!");
        alert('업데이트 성공했습니다')
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        alert('업데이트 실패했습니다')
      });
  }


  const onClickSunDay = () => {
    const firstRef = db.collection('주일예배').doc('1부').collection(sundayString).doc('--stats--')
    const secondRef = db.collection('주일예배').doc('2부').collection(sundayString).doc('--stats--')
    const thirdRef = db.collection('주일예배').doc('3부').collection(sundayString).doc('--stats--')
    const forthRef = db.collection('주일예배').doc('4부').collection(sundayString).doc('--stats--')
    const sixthRef = db.collection('주일예배').doc('6부').collection(sundayString).doc('--stats--')
    const settingRef = db.collection('setting').doc('latest')
    batch.set(firstRef, { ReservationCount: seats.sundayOne })
    batch.set(secondRef, { ReservationCount: seats.sundayTwo })
    batch.set(thirdRef, { ReservationCount: seats.sundayThree })
    batch.set(forthRef, { ReservationCount: seats.sundayFour })
    batch.set(sixthRef, { ReservationCount: seats.sundaySix })
    batch.update(settingRef, {
      isWeekday: false,
      wednesday: "",
      friday: "",
      sunday: sundayString,
      TimerWednesDay: "new Date(wednesday.getFullYear(), wednesday.getMonth(), wednesday.getDate()-1, 19)",
      TimerFriDay: "",
      TimerSunDay: [sunday.getFullYear(), sunday.getMonth(), sunday.getDate()-3, 19],
      forcingCloseWed: false,
      forcingCloseFri: false,
      forcingCloseSun: forcingCloseSun,
      wednesDaySeats: "",
      fridaySeats: "",
      sundayOneSeats: seats.sundayOne,
      sundayTwoSeats: seats.sundayTwo,
      sundayThreeSeats: seats.sundayThree,
      sundayFourSeats: seats.sundayFour,
      sundaySixSeats: seats.sundaySix,
      commentWed: "",
      commentFri: "",
      commentSunOne: comments.commentSunOne,
      commentSunTwo: comments.commentSunTwo,
      commentSunThree: comments.commentSunThree,
      commentSunFour: comments.commentSunFour,
      commentSunSix: comments.commentSunSix,
    })
    batch.commit()
    .then(() => {
      console.log("Document successfully written!");
      alert('업데이트 성공했습니다')
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      alert('업데이트 실패했습니다')
    });
  }

  const onClickLookUp = (title, time, date) => {
    db.collection(title).doc(time).collection(date).orderBy("submitTime").get().then((querySnapshot) => {
      let tempArray = []
       querySnapshot.forEach((doc) => {
         tempArray.push({
          id: doc.id,
          ...doc.data()
         })
      })
      setUserlist(tempArray)
    }).catch(error => {
      console.log(error)
    })
  }

  const converTime = (timestamp) => {
    let date = new Date(timestamp * 1000)
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }

  const onForingCloseClick = (days) => {
    if (days === "수요일") {
      setForcingCloseWed(!forcingCloseWed)
    } else if (days === "금요일") {
      setForcingCloseFri(!forcingCloseFri)
    } else if (days === "주일") {
      setForcingCloseSun(!forcingCloseSun)
    }
  }

  const onSeatsChange = (e) => {
    const { value, name } = e.target
    setSeats({
      ...seats,
      [name]: value
    })
  }

  const onCommentChange = (e) => {
    
    const { value, name } = e.target
    console.log(value)
    setComments({
      ...comments,
      [name]: value
    })
  }


  return (
    <Container>
      <NavBarForAdmin />

      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 24, marginTop: 24, backgroundColor:'lightgray', padding: 10}}>현재 세팅 상태</div>
        <div>{latestSetting==null ? "" : latestSetting.isWeekday ? "현재 주중예배(수/금)가 세팅되어 있습니다." : "주일예배가 세팅되어 있습니다."}</div>
        
      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 24, marginTop: 24, backgroundColor:'lightgray', padding: 10}}>다음 신청 세팅하기</div>
      <SettingContainer>
        <div>주중예배세팅</div>
        <Setting>
          <div>수요예배</div>
          <Title>날짜 : {wednesday.getFullYear()}년 {wednesday.getMonth()+1}월 {wednesday.getDate()}일</Title>
          <Title>타이머시간 : {forcingCloseWed ? '강제종료' : `${wednesday.getFullYear()}년 ${wednesday.getMonth()+1}월 ${wednesday.getDate()-1}일 19시`}</Title>
          <Title>좌석수 : {seats.wednesDay}</Title>
        </Setting>
        <Setting>
          <div>금요예배</div>
          <Title>날짜 : {friday.getFullYear()}년 {friday.getMonth()+1}월 {friday.getDate()}일</Title>
          <Title>타이머시간 : {forcingCloseFri ? '강제종료' : `${friday.getFullYear()}년 ${friday.getMonth()+1}월 ${friday.getDate()-3}일 20시`}</Title>
          <Title>좌석수 : {seats.friday}</Title>
        </Setting>
        <div style={{borderTop: '1px solid black', marginBottom: 10}}/>
        <div>
          <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
            <div style={{marginRight: 10, display:'flex', flexWrap:'wrap', width: 60}}>수요예배 좌석조정</div>
            <input name="wednesday" value={seats.wednesDay} onChange={onSeatsChange} style={{width: 50}}/>
            <div style={{marginLeft: 10, marginRight: 10, display:'flex', flexWrap:'wrap', width: 60}}>금요예배 좌석조정</div>
            <input name="friday" value={seats.friday} onChange={onSeatsChange} style={{width: 50, marginRight: 30}}/>
            <button onClick={() => onForingCloseClick('수요일')} style={{marginRight: 20}}>수요예배 강제닫기</button>
            <button onClick={() => onForingCloseClick('금요일')}>금요예배 강제닫기</button>
          </div>
          <div style={{display:'flex', marginBottom: 10}}>
          <div style={{marginRight: 10, display:'flex', flexWrap:'wrap', width: '15%'}}>수요예배 이벤트입력</div>
          <input 
            name="commentWed" 
            value={comments.commentWed} 
            onChange={onCommentChange} 
            style={{width: '30%', marginRight: 30}}
          />
          <div style={{marginRight: 10, display:'flex', flexWrap:'wrap', width: '15%'}}>금요예배 이벤트입력</div>
          <input 
            name="commentFri" 
            value={comments.commentFri} 
            onChange={onCommentChange} 
            style={{width: '30%', marginRight: 30}}
          />
          </div>

          <button 
            style={{backgroundColor: 'red', border: '2px solid black', padding: 10, font: 20, fontWeight: 600}}
            onClick={() => onClickWeekday()}
          >
            세팅 업데이트
          </button>
        </div>
      </SettingContainer>
      <div style={{borderTop: '2px solid black', marginBottom: 10}}/>
      <SettingContainer>
        <div>주일예배</div>
        <Setting>
          <Title>주일예배 DB세팅</Title>
          <Button onClick={() => onClickSunDay()}>{sunday.getFullYear()}년 {sunday.getMonth()+1}월 {sunday.getDate()}일</Button>
        </Setting>
      </SettingContainer>

      <div style={{fontSize: 16, fontWeight: 600, marginBottom: 28, marginTop: 28, backgroundColor:'lightgray', padding: 10}}>신청자 명단 확인</div>
      
      <LookupContainer>
        <LookupButton onClick={() => onClickLookUp('수요예배', '1부', wednesdayString)}>수요예배</LookupButton>
        <LookupButton onClick={() => onClickLookUp('금요성령집회', '1부', fridayString)}>금요예배</LookupButton>
        <LookupButton onClick={() => onClickLookUp('주일예배', '1부', sundayString)}>1부조회</LookupButton>
        <LookupButton onClick={() => onClickLookUp('주일예배', '2부', sundayString)}>2부조회</LookupButton>
        <LookupButton onClick={() => onClickLookUp('주일예배', '3부', sundayString)}>3부조회</LookupButton>
        <LookupButton onClick={() => onClickLookUp('주일예배', '4부', sundayString)}>4부조회</LookupButton>
        <LookupButton onClick={() => onClickLookUp('주일예배', '6부', sundayString)}>6부조회</LookupButton>
      </LookupContainer>
      

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
            {userlist.map((user, index) => (
              <TableBody>
                <TableRow key={index}>
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

const SettingContainer = styled.div`
  margin-bottom: 20px;
`;

const Setting = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const LookupContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const LookupButton = styled.button`
  border: 2px solid #228be6;
  padding: 1rem;
  margin: 0 1rem;
`;




export default AdminPage;