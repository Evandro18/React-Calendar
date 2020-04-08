import React from 'react'

export default function ArrowRight() {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <svg width={'24px'} height={'24px'} viewBox='0 0 24 24'>
        <g>
          <g>
            <g>
              <path
                d='M362.667,42.667h-21.333V0h-42.667v42.667H128V0H85.333v42.667H64c-23.573,0-42.453,19.093-42.453,42.667L21.333,384
				c0,23.573,19.093,42.667,42.667,42.667h298.667c23.573,0,42.667-19.093,42.667-42.667V85.333
				C405.333,61.76,386.24,42.667,362.667,42.667z M362.667,384H64V149.333h298.667V384z'
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
