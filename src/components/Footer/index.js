import React, { useContext } from 'react'
import RangeContext from '../../context/range'

export default function index({ onCancel, onConfirm }) {
  const { dates } = useContext(RangeContext)

  return (
    <div>
      <div className='footer-buttons'>
        <button type='button' className='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='button' className='button' onClick={() => onConfirm([...dates])}>
          OK
        </button>
      </div>
    </div>
  )
}
