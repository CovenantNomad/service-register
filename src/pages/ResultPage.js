import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

import NavBar from '../components/NavBar'

import { SettingContext } from '../context/SettingContext'
import { Firebase, db } from '../config/firebaseConfig'

const VIEW_HEIGHT = window.innerHeight

const ResultPage = () => {
  const [ result, setResult ] = useState(null)
  const [ setting, setSetting ] = useContext(SettingContext)
  const location = useLocation();
  const registerData = location.payload

  const onClickClose = () => {
    window.open('','_self').close(); 
    // 모바일에서 페이지 닫기
    window.location.href="kakaotalk://inappbrowser/close"
  }

  const sendingData = async () => {
    const submitData = {
      name: registerData.name,
      position: registerData.position,
      division: registerData.division,
      submitTime:registerData.submitTime,
      index: 0
    }

    const statsRef = db.collection(registerData.title).doc(registerData.serviceTime).collection(registerData.reservationDate).doc('--stats--');
    const newuserRef = db.collection(registerData.title).doc(registerData.serviceTime).collection(registerData.reservationDate).doc();
    const userListRef = db.collection(registerData.title).doc(registerData.serviceTime).collection(registerData.reservationDate)
    const decrement = Firebase.firestore.FieldValue.increment(-1)

    let query = userListRef.where("name", "==", registerData.name).where("position", "==", registerData.position);
    query.get().then(querySnapshot => {
      if (querySnapshot.empty) {
        console.log('등록진행 계속')
        db.runTransaction((transaction) => {
          return transaction.get(statsRef).then((statsDoc) => {
            if (!statsDoc.exists) {
              console.log('Document does not exist')
            } 
            if (statsDoc.data().ReservationCount > 0) {
              const remainingCount = statsDoc.data().ReservationCount
              transaction.update(statsRef, { ReservationCount: decrement }, { merge: true })
              transaction.set(newuserRef, {
                ...submitData,
                index: Math.abs(remainingCount - 70) + 1,
              }) 
              }
            }).then(() => {
              console.log("Transaction successfully committed!")
            }).catch((error) => {
              console.log("Transaction failed: ", error)
            })
        })
      } else {
        console.log('중복자로 인한 등록진행 중단')
      }
    })
  }

  const checkResult = () => {
    const userListRef = db.collection(registerData.title).doc(registerData.serviceTime).collection(registerData.reservationDate)
    let indexQuery = userListRef.where("index", "==", 70)
    let query = userListRef.where("name", "==", registerData.name).where("position", "==", registerData.position);
    query.get().then(querySnapshot => {
      if (querySnapshot.empty) {
        console.log('DB에 없음')
        setResult(false)
      } else {
        querySnapshot.forEach((doc) => {
          if (doc.data().index < 70) {
            console.log('선착순 당첨')
            setResult(true)
          } else if (doc.data().index === 70) {
            indexQuery.get().then((querySnapshot) => {
              let tempArray = []
              querySnapshot.forEach((doc, idx) => {
                tempArray.push({
                 id: doc.id,
                 order: idx,
                 ...doc.data()
                })
             })
             tempArray.sort((a, b) => {
               return a.submitTime - b.submitTime
             })
             if (tempArray[0].name === registerData.name) {
              console.log('선착순 당첨')
              setResult(true)
             } else {
              console.log('제출시간에서 밀림')
              setResult(false)
             }
            })
          } else {
            console.log('70명 이후 신청자')
            setResult(false)
          }
        })
      }
    })
  }

  useEffect(async () => {
    console.log('전송중...')
    if (setting.isSubmitting) {
      await sendingData()
      await setSetting({
        ...setting,
        isSubmitting: false
      })
    }
  }, [])
  

  return (
    <Container>
      <NavBar />
      <ResultContainer style={{height: VIEW_HEIGHT}}>
        {setting.isSubmitting ? (
          <>
            <div>...처리중...</div>
            <div>잠시만 기다려주세요</div>
          </>
        ) : (
          <>
          {result == null ? (
            <CheckContainer>
              <CheckButton onClick={() => checkResult()}>결과확인</CheckButton>
              <div style={{fontSize: '1.25rem', marginBottom: '0.25rem', textAlign:'center'}}>결과 확인 버튼을</div>
              <div style={{fontSize: '1.25rem', marginBottom: '0.25rem', textAlign:'center'}}>눌러주세요!</div>
            </CheckContainer>
          ) : (
            <>
            {result ? (
              <>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{registerData.name} {registerData.position}님 </div>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: 'blue'}}>{registerData.title} 신청에 성공하셨습니다.</div>
                <div style={{fontSize: '1.25rem', marginBottom: '2rem'}}>많은 은혜 받으시길 바랍니다</div>

                <CloseButton onClick={onClickClose}>페이지 닫기</CloseButton>
                <div 
                  style={{width: '90%', display:'flex', flexWrap:'wrap', textAlign:'center', justifyContent: 'center', marginBottom: '0.5rem'}}
                >
                  뒤로 가기 버튼만 누르지 마시고 창을 닫아 주세요 *^^*
                </div>
                <div 
                  style={{width: '90%', display:'flex', flexWrap:'wrap', textAlign:'center', justifyContent: 'center'}}
                >
                  담당교역자가 개인별로 오늘 10시안에 확인 메시지 보내 드리겠습니다
                </div>
              </>
            ) : (
              <>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{registerData.name} {registerData.position}님 </div>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>죄송합니다.</div>
                <div style={{fontSize: '1.5rem', marginBottom: '2rem', color: 'red'}}>{registerData.title} 신청이 마감되었습니다.</div>

                <CloseButton onClick={onClickClose}>페이지 닫기</CloseButton>
                <div 
                  style={{width: '90%', display:'flex', flexWrap:'wrap', textAlign:'center', justifyContent: 'center', marginBottom: '0.5rem'}}
                >
                  뒤로 가기 버튼만 누르지 마시고 창을 닫아 주세요 *^^*
                </div>
                <div 
                  style={{width: '90%', display:'flex', flexWrap:'wrap', textAlign:'center', justifyContent: 'center'}}
                >
                  담당교역자가 개인별로 오늘 10시안에 확인 메시지 보내 드리겠습니다
                </div>
              </>
            )}
            </>
          )}
          </>
        )}
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

const CheckContainer = styled.div`
  margin-bottom: 2rem;
`;

const CheckButton = styled.div`
  margin-bottom: 1rem; 
  background-color: #4D826C;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 16px;
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





// const decrement = Firebase.firestore.FieldValue.increment(-1)
//   const batch = db.batch();

//   const onSubmit = async data => {
//     if (setting.isSubmitting){

//       const submitData = {
//         ...data,
//         submitTime: new Date()
//       }
//       const statsRef = db.collection('수요예배').doc('1부').collection(setting.reservationDate).doc('--stats--');
//       const newuserRef = db.collection('수요예배').doc('1부').collection(setting.reservationDate).doc();
//       return db.runTransaction((transaction) => {
//         return transaction.get(statsRef).then((statsDoc) => {
//           if (statsDoc.data().ReservationCount > 0){
//             batch.set(newuserRef, submitData);
//             batch.set(statsRef, { ReservationCount: decrement }, {merge: true})
//             batch.commit()
//           } else {
//             console.log('예약실패')
//             history.push({
//               pathname: "/service-register/result", 
//               state: {
//                 result: false, 
//                 detail: submitData
//               }
//             })
//             return Promise.reject('실패')
            
//           }
//         })
//       }).then(() => {
//         console.log('예약성공')
//         history.push({
//           pathname: "/service-register/result", 
//           state: {
//             result: true, 
//             detail: submitData
//           }
//         })
//       }).catch((error) => {
//         console.log(error)
//       })
//     }
//   }