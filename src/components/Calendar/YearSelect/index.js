import React, { useRef, useEffect } from 'react'
import { INITIAL_YEAR, FINAL_YEAR } from '../../../utils/constants'
import './style.css'

export default function YearsSelect({ currentYear, onChange }) {
  const selected = useRef()
  const list = useRef()

  const years = () => {
    const years = []
    for (let year = INITIAL_YEAR; year <= FINAL_YEAR; year++) {
      if (currentYear === year) {
        years.push(
          <li
            key={year}
            ref={selected}
            className='year selected'
            onClick={() => handleSelectYear(year)}
          >
            <p>{year}</p>
          </li>
        )
      } else {
        years.push(
          <li key={year} className='year' onClick={() => handleSelectYear(year)}>
            <p >{year}</p>
          </li>
        )
      }
    }
    return years
  }


  useEffect(() => {
    if (selected && selected.current && list && list.current) {
      list.current.scrollTo(0, selected.current.offsetTop - 300)
    }
  }, [selected, list])

  function handleSelectYear (value) {
    onChange(value)
  }
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <ul ref={list} style={{ overflow: 'auto', height: '100%' }}>{years()}</ul>
    </div>
  )
}
