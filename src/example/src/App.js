import React, { useState } from 'react'
import { Calendar, RangePicker } from '../../../'
import RadioButton from './components/RadioButton'
import './style.css'

function App() {
  const [type, setType] = useState('')

  const typeCalendar = (type) => {
    switch (type) {
      case 'calendar':
        return <Calendar />
      case 'rangePicker':
        return <RangePicker label='Select Date' value={[new Date(), new Date('2020-04-13')]} />
      default:
        return <RangePicker label='Select Date' value={[new Date(), new Date('2020-04-13')]} />
    }
  }

  const CALENDAR_TYPES = [
    { name: 'Calendar', value: 'calendar' },
    { name: 'Range Picker', value: 'rangePicker' }
  ]

  return (
    <div className='App'>
      <RadioButton
        name='typeCalendar'
        values={CALENDAR_TYPES}
        onChange={(value) => setType(value)}
      />
      <div>{typeCalendar(type)}</div>
    </div>
  )
}

export default App
