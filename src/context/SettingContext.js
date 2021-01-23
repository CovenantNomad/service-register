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
    openWednesDay: false,
    openFriDay: false,
    openSunDay: false,
    forcingCloseWed: false,
    forcingCloseFri: false,
    forcingCloseSun: false,
    isSubmitted: false,
  })

  return <SettingContext.Provider value={[state, setState]}>{props.children}</SettingContext.Provider>
}

export { SettingContext, SettingProvider }