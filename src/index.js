import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/Calendar'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App type='range' />
  </React.StrictMode>,
  rootElement
)
