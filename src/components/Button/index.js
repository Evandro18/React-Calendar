import React from 'react'
import './styles.css'

export default function Button(props) {
  return (
    <button {...props} className={`custom-button ${props.className ? props.className : ''}`}>
      <span className='ripple'>{props.label ? props.label : props.children}</span>
    </button>
  )
}
