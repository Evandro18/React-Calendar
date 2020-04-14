import React from 'react'
import CalendarComponent from './CalendarComponent'
import RangeContext from '../../context/range'
import { useRange } from '../../hooks/range'

export default function OnlyDateCalendar({ onChange, type }) {
  const [dates, setDates] = useRange()
  return (
    <RangeContext.Provider value={{ dates, setDates }}>
      <CalendarComponent onChange={onChange} type={type} />
    </RangeContext.Provider>
  )
}
