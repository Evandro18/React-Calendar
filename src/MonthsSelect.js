import React, { useState, useEffect } from 'react'
import './css/CalendarMonth.css'
import ParserDate from './ParseDate'
import ArrowRight from './icons/ArrowRight'
import ArrowLeft from './icons/ArrowLeft'
import Button from './Button'

export default function MonthsSelect({ currentDate, months, onChange }) {
  const [selectMonth, setSelectMonth] = useState(new ParserDate().get('month'))
  const [monthYearStr, setMonthYearStr] = useState(null)

  useEffect(() => {
    const monthIndex = currentDate.get('month')
    if (selectMonth !== monthIndex) setSelectMonth(monthIndex)
    const year = currentDate.get('year')
    const strDate = `${months[monthIndex]} ${year}`
    setMonthYearStr(strDate)
  }, [currentDate, selectMonth, months])

  const onChangeMonth = (to) => () => {
    let monthIndex = selectMonth + to
    if (monthIndex >= months.length) return
    if (monthIndex < 0) return
    onChange(monthIndex)
  }

  return (
    <div className='calendar-months-container'>
      <div className='calendar-arrows'>
        <div className='flex-grow-1'>
          <Button onClick={onChangeMonth(-1)}>
            <ArrowRight />
          </Button>
        </div>
        <div className='calendar-month-text flex-grow-1'>{monthYearStr}</div>
        <div className='flex-grow-1 flex-end'>
          <Button onClick={onChangeMonth(1)}>
            <ArrowLeft />
          </Button>
        </div>
      </div>
    </div>
  )
}
