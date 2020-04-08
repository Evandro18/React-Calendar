import React, { useState } from 'react'
import Calendar from '../Calendar'
import CalendarIcon from '../../icons/Calendar'

export default function RangePicker() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <span>Hello Input</span>
      <input></input>
      <div>
        <CalendarIcon />
      </div>
    </div>
  )
}
