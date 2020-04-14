import React, { useContext } from 'react'
import RangeContext from '../../context/range'

export default function index({ onCancel, onConfirm, buttonLabels }) {
  const { dates } = useContext(RangeContext)

  return (
    <div>
      <div className='footer-buttons'>
        <button type='button' className='button' onClick={onCancel}>
          {buttonLabels.cancel}
        </button>
        <button type='button' className='button' onClick={() => onConfirm([...dates])}>
          {buttonLabels.confirm}
        </button>
      </div>
    </div>
  )
}
