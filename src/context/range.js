import { createContext } from 'react'
import ParserDate from '../utils/ParseDate'

const newContext = createContext({
  range: new Map([[new ParserDate().reset().toJSON(), new ParserDate()]])
})

export default newContext
