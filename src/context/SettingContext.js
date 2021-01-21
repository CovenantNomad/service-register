import React, { useState, createContext } from 'react'

const SettingContext = createContext([{}, ()=>{}])

const SettingProvider = (props) => {
  const [state, setState] = useState({
    init: false,
    title: "",
    reservationDate: "",
    openWednesDay: false,
    openFriDay: false,
    openSunDay: false,
    isSubmitting: false,
  })

  return <SettingContext.Provider value={[state, setState]}>{props.children}</SettingContext.Provider>
}

export { SettingContext, SettingProvider }
