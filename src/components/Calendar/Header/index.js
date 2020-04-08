import React from 'react'
import '../../../css/styles.css'
import ParseDate from '../../../utils/ParseDate'

export default function CalendarHeader({ currentYear, currentDate, dayNames, months, onClick }) {
  const formattedDate = new ParseDate(currentDate).format({ dayNames, months })
  return (
    <>
      <div className='header'>
        <div onClick={onClick} className='header-container full-width margin-item'>
          {currentYear}
          <div className='header-item-grow-2' />
        </div>
        <div className='margin-item header-date'>{formattedDate}</div>
      </div>
    </>
  )
}
