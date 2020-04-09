import React, { useState, useEffect } from 'react'
import './inputpicker.css'
import Calendar from '../Calendar'
import CalendarIcon from '../../icons/Calendar.js'
import ParserDate from '../../utils/ParseDate'
import { dayNames, monthNames } from '../../utils/constants'

export default function RangePicker({
  monthLabels,
  dayLabels,
  placeholder = '',
  value,
  label,
  onChange = () => {}
}) {
  const [open, setOpen] = useState(false)
  const [localValue, setValue] = useState('')

  const getFormattedText = (arrayDates) => {
    if (arrayDates.length > 1) {
      const firstDate = arrayDates[0]
      const lastDate = arrayDates[arrayDates.length - 1]
      return [firstDate, lastDate]
        .filter((el) => el)
        .map((el) =>
          el.format({
            dayNames: dayLabels ? dayLabels : dayNames,
            months: monthLabels ? monthLabels : monthNames
          })
        )
        .join(' - ')
    }
    if (arrayDates[0]) {
      return arrayDates[0].format({
        dayNames: dayLabels ? dayLabels : dayNames,
        months: monthLabels ? monthLabels : monthNames
      })
    }
    return ''
  }

  useEffect(() => {
    const areSame = JSON.stringify(localValue) === JSON.stringify(value)
    if (value && !areSame && value && value instanceof Array) {
      const resetedValues = value.map((el) => new ParserDate(el).reset())
      const inputText = getFormattedText(resetedValues)

      setValue(inputText)
    }
    if (!value) setValue('')
  }, [value])

  const onFinish = (data = []) => {
    if (data && data.length) {
      const inputText = getFormattedText(data.map(([, item]) => item))
      setValue(inputText)
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
          monthNames={monthLabels ? monthLabels : monthNames}
          weekDayNames={dayLabels ? dayLabels : dayNames}
          type='range'
          value={localValue}
          onCancel={() => setOpen(false)}
          onFinish={onFinish}
        />
      </div>
    </div>
  )
}
