import { useState } from 'react'
import ParserDate from '../utils/ParseDate'
export function useRange() {
  const [range, setRange] = useState(
    new Map([[new ParserDate().reset().toJSON(), new ParserDate()]])
  )
  return [range, setRange]
}
