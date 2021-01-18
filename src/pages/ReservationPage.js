import React, { useState } from 'react';
import styled from 'styled-components';

import { db } from '../config/firebaseConfig'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ReservationPage = () => {
  const [ userlist, setUserList ] = useState([])

  const onClickList = () => {
    db.collection("20210120wed").onSnapshot((snapshot) => {
      const userArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setUserList(userArray)
    })
  }

  return (
    <Container>
      <button onClick={onClickList} title="명단확인"/>
     

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

export default ReservationPage;