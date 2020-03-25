import React from 'react'
import './CalendarDays.css'
import ParserDate from './ParseDate'

export default function CalendarDays({
  weekDays = [],
  month,
  currentDate = new ParserDate(),
  onChange
}) {
  const getWeekDays = indexDay => {
    const weekIndexs = Object.keys(month).map(el => el)
    return weekIndexs.map(week => {
      let classes = 'calendar-days-item-spacing-day'
      if (month[week][indexDay] === currentDate.get('date')) {
        classes += ' calendar-days-number-color-black'
      }
      return (
        <div
          className={classes}
          key={`current-day-${indexDay}`}
          onClick={onChange(month[week][indexDay])}
        >
          {month[week][indexDay]}
        </div>
      )
    })
  }
  return (
    <div className='calendar-days'>
      {weekDays.map((name, index) => (
        <>
          <div key={`week-${index + 1}`} className='calendar-days-item'>
            {`${name.substr(0, 3)}`}
            <div key={index}>{getWeekDays(index + 1)}</div>
          </div>
        </>
      ))}
    </div>
  )
}
