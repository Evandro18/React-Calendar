import React, { useState } from 'react'
import { Calendar, RangePicker } from '../../../'
import RadioButton from './components/RadioButton'
import './style.css'

function App() {
  const [type, setType] = useState('rangePicker')

  const typeCalendar = (type) => {
    const nextDay = new Date()
    nextDay.setDate(nextDay.getDate() + 3)

    switch (type) {
      case 'calendar':
        return <Calendar />
      case 'calendarRange':
        return <Calendar type='range' />
      case 'calendarSelector':
        return <Calendar type='selector' />
      case 'rangePicker':
        return <RangePicker label='Select Date' value={[new Date(), nextDay]} format='YYYY/dd/mm' />
      default:
        return <RangePicker label='Select Date' value={[new Date(), nextDay]} format='YYYY/dd/mm' />
    }
  }

  const CALENDAR_TYPES = [
    { name: 'Calendar', value: 'calendar' },
    { name: 'Calendar Range', value: 'calendarRange' },
    { name: 'Calendar Selector', value: 'calendarSelector' },
    { name: 'Range Picker', value: 'rangePicker' }
  ]

  return (
    <div className='App'>
      <RadioButton
        value={type}
        name='typeCalendar'
        options={CALENDAR_TYPES}
        onChange={(value) => setType(value)}
      />
      <div className='calendar-box'>{typeCalendar(type)}</div>
    </div>
  )
}

export default App
