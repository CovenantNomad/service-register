import React, { useState, createContext } from 'react'

const SettingContext = createContext([{}, ()=>{}])

const SettingProvider = (props) => {
  const [state, setState] = useState({
    init: false,
    isWeekday: true,
    wednesday: "",
    friday: "",
    sunday: "",
    TimerWednesDay: "",
    TimerFriDay: "",
    TimerSunDay: "",
    openWednesDay: true,
    openFriDay: true,
    openSunDay: false,
    forcingCloseWed: false,
    forcingCloseFri: false,
    forcingCloseSun: false,
    wednesDaySeats: 70,
    fridaySeats: 70,
    sundayOneSeats: 70,
    sundayTwoSeats: 70,
    sundayThreeSeats: 70,
    sundayFourSeats: 70,
    sundaySixSeats: 70,
    commentWed: "",
    commentFri: "",
    commentSunOne: "",
    commentSunTwo: "",
    commentSunThree: "",
    commentSunFour: "",
    commentSunSix: "",
    isSubmitting: false,
    isSubmitted: false,
  })

  return <SettingContext.Provider value={[state, setState]}>{props.children}</SettingContext.Provider>
}

export { SettingContext, SettingProvider }