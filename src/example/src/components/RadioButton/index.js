import React from 'react'
import './style.css'

export default function RadioButton({ name = 'radio', options = [], onChange, value }) {
  return (
    <div className='type-calendar'>
      {options.map((item, key) => {
        return (
          <label key={key}>
            <input
              type='radio'
              name={name}
              key={key}
              checked={Boolean(value === item.value)}
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
