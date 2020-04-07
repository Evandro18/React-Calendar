import React from 'react'

export default function YearsComponent({ currentYear, classNames }) {
  return <div className={`header-year header-item-align-left ${classNames}`}>{currentYear}</div>
}
