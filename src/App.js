import React, { useState, useEffect, useCallback } from 'react'
import './styles.css'
import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import MonthsSelect from './MonthsSelect'
import ParserDate from './ParseDate'
import getMonthsLength from './getDaysInMonth'
import { dayNames, monthNames as months } from './contants'

export default function App({ weekDayNames, monthNames, date }) {
  const [currentDate, setDate] = useState(new ParserDate())
  const [month, setMonth] = useState(null)

  const buildMonthCallback = useCallback(() => {
    const daysInMonth = getMonthsLength(currentDate)
    const tempDate = new ParserDate(currentDate)
    tempDate.set('date', 1)
    const firstWeekDayOfMonth = tempDate.get('day') + 1
    const weekLength = 7
    const qtdWeek = Math.ceil(daysInMonth / weekLength)
    const weeks = [...new Array(qtdWeek)].map((_, i) => i + 1)
    const daysByWeek = [...new Array(weekLength)].map((_, i) => i + 1)
    let count = 1
    let generateMonth = null
    for (const weekIndex of weeks) {
      // eslint-disable-next-line
      const currentWeek = daysByWeek.reduce((acc, dayIndex) => {
        if (dayIndex >= firstWeekDayOfMonth && !generateMonth) {
          generateMonth = {}
          if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {}
          acc[dayIndex] = count
        }
        if (count <= daysInMonth && generateMonth) {
          if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {}
          acc[dayIndex] = count++
        }
        return acc
      }, {})
      generateMonth[weekIndex] = currentWeek
    }
    setMonth(generateMonth)
  }, [currentDate])

  useEffect(() => {
    if (date !== currentDate) {
      const newDate = date ? new ParserDate(date.toString()) : currentDate
      setDate(newDate)
      buildMonthCallback()
    }
  }, [date, setDate, currentDate, buildMonthCallback])

  function onChange(value) {
    const newDate = new ParserDate(currentDate)
    newDate.set('month', value)
    setDate(newDate)
    buildMonthCallback()
  }

  const onChangeDate = (value) => () => {
    if (value) {
      const newDate = new ParserDate(currentDate)
      newDate.set('date', value)
      setDate(newDate)
    }
  }

  return (
    <div className='App'>
      <div className='calendar'>
        <CalendarHeader
          currentDate={currentDate}
          currentYear={currentDate.getFullYear()}
          dayNames={weekDayNames ? weekDayNames : dayNames}
          months={monthNames ? monthNames : months}
        />
        <MonthsSelect
          currentDate={currentDate}
          currentMonth={currentDate.get('month')}
          months={monthNames ? monthNames : months}
          onChange={onChange}
        />
        <CalendarDays
          weekDays={dayNames}
          month={month || {}}
          currentDate={currentDate}
          onChange={onChangeDate}
        />
      </div>
    </div>
  )
}
