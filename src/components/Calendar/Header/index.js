import React from 'react'
import '../../../css/custom-calendar-styles.css'
import ParseDate from '../../../utils/ParseDate'

export default function CalendarHeader({ showYear, currentDate, dayNames, months, onClick }) {
  const formattedDate = new ParseDate(currentDate).format({ dayNames, months, pattern: 'EE, MM YYYY' })
  return (
    <>
      <div className='header'>
        <div onClick={onClick} className='header-container full-width margin-item'>
          {showYear}
          <div className='header-item-grow-2' />
        </div>
        <div className='margin-item header-date'>{formattedDate}</div>
      </div>
    </>
  )
}
