import React from 'react'
import './style.css'

export default function RadioButton({ name = 'radio', values = [], onChange }) {
  return (
    <div className='type-calendar'>
      {values.map((item, key) => {
        return (
          <label key={key}>
            <input
              type='radio'
              name={name}
              key={key}
              value={item.value}
              onChange={() => onChange(item.value)}
            />
            {item.name}
          </label>
        )
      })}
    </div>
  )
}
