import React, { useState, createContext } from 'react'

const CounterContext = createContext([{}, ()=>{}])

const CounterProvider = (props) => {
  const [state, setState] = useState({
    remainingWednesDay: 70,
    remainingFriDay: 70,
    remainingSunDayFirst: 70,
    remainingSunDaySecond: 70,
    remainingSunDayThird: 70,
    remainingSunDayFourth: 70,
  })

  return <CounterContext.Provider value={[state, setState]}>{props.children}</CounterContext.Provider>
}

export { CounterContext, CounterProvider }