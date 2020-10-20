import React from 'react'
import '../../../css/CalendarDays.css'
import ParserDate from '../../../utils/ParseDate'

export default function CalendarDays({
  currentYear,
  currentMonth,
  currentDate,
  showDate,
  weekDays = [],
  monthStructure = {},
  dates = new Map(),
  onChange,
  type
}) {

  const buildDate = (day) => {
    if (day && currentMonth === showDate.get('month') && currentYear === showDate.getFullYear()) {
      const currentDay = new ParserDate(`${currentYear}-${currentMonth + 1}-${day} 00:00:00`)
      return currentDay
    }
    return new ParserDate()
  }

  const getWeekDays = (indexDay) => {
    if (!monthStructure) return <span />
    const weekIndexs = Object.keys(monthStructure).map(el => el)

    return weekIndexs.map((week) => {
      let classes = 'calendar-days-item-spacing-day'
      const day = monthStructure[week][indexDay]
      const jsonDate = buildDate(day).toJSON()

      const validations = {
        onlydate: () => (
          day === currentDate.get('date') &&
          currentMonth === showDate.get('month') &&
          currentYear == showDate.getFullYear()
        ) ,
        range: () => day && dates.get(jsonDate),
        selector: () => day && dates.get(jsonDate)
      }

      if (validations[type] && validations[type]()) {
        classes += ' calendar-days-number-color-black'
      }

      return (
        <div
          key={`current-day-${week}-${indexDay}`}
          className={classes}
          onClick={onChange(day)}
        >
          {day}
        </div>
      )
    })
  }

  return (
    <div className='calendar-days'>
      {weekDays.map((name, index) => (
        <div key={`week-${index + 1}`} className='calendar-days-item'>
          {`${name.substr(0, 3)}`}
          <div>{getWeekDays(index + 1)}</div>
        </div>
      ))}
    </div>
  )
}
