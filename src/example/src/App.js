import React from 'react'
import { RangePicker } from '../../../'

function App() {
  return (
    <div className='App'>
      <RangePicker label='Select Date' value={[new Date(), new Date('2020-04-13')]} />
    </div>
  )
}

export default App
