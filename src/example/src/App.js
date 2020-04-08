import React from 'react'
import { RangePicker } from '../../../'

function App() {
  const nextDay = new Date()
  nextDay.setDate(nextDay.getDate() + 3)
  return (
    <div className='App'>
      <RangePicker label='Select Date' value={[new Date(), nextDay]} />
    </div>
  )
}

export default App
