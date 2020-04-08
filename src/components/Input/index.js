import React, { useState, useEffect } from 'react'
import './inputpicker.css'
import Calendar from '../Calendar'
import CalendarIcon from '../../icons/Calendar.js'
import ParserDate from '../../utils/ParseDate'
import { dayNames, monthNames } from '../../utils/constants'

export default function RangePicker({
  monthLabels = [],
  dayLabels = [],
  placeholder = '',
  value,
  label,
  onChange = () => {}
}) {
  const [open, setOpen] = useState(false)
  const [localValue, setValue] = useState('')

  useEffect(() => {
    const areSame = JSON.stringify(localValue) === JSON.stringify(value)
    if (value && !areSame && value && value instanceof Array) {
      const firstDate = value[0] && new ParserDate(value[0])
      const lastDate = value[value.length - 1] && new ParserDate(value[value.length - 1])
      const newValue = [firstDate, lastDate]
        .filter((el) => el)
        .map((el) =>
          el.format({
            dayNames: dayLabels ? dayLabels : dayNames,
            months: monthLabels ? monthLabels : monthNames
          })
        )
        .join(' - ')
      setValue(newValue)
    }
    if (!value) setValue('')
  }, [value])

  const onFinish = (data = []) => {
    if (data && data.length) {
      const [, date1] = data[0]
      const [, date2] = data[data.length - 1]
      const newValue = `${new ParserDate(date1).format({
        dayNames,
        months: monthNames
      })} - ${new ParserDate(date2).format({ dayNames, months: monthNames })}`
      setValue(newValue)
      onChange(data.map(([, dateValue]) => dateValue))
    }
    setOpen(false)
  }

  const onInputChange = (value) => {
    return
  }

  const handleOpen = (ev) => {
    ev.preventDefault()
    setOpen(true)
  }

  return (
    <div className='container'>
      <span className='input-label'>{label}</span>
      <div className='input-content'>
        <input type='text' placeholder={placeholder} value={localValue} onChange={onInputChange} />
        <button type='button' className='icon-button' onClick={handleOpen}>
          <CalendarIcon />
        </button>
      </div>
      <div className={!open ? 'display-none' : 'backdrop'}></div>
      <div className={!open ? 'display-none' : 'backdrop-content'}>
        <Calendar
          monthNames={monthLabels}
          weekDayNames={dayLabels}
          type='range'
          value={localValue}
          onCancel={() => setOpen(false)}
          onFinish={onFinish}
        />
      </div>
    </div>
  )
}
