import ParserDate from './ParseDate'
const returnFebruaryLengthDays = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29
  return 28
}

export default (date = new ParserDate()) => {
  const year = date.get('year')
  const month = date.get('month') + 1
  const monthsDaysLengh = {
    1: 31,
    2: returnFebruaryLengthDays(year),
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }

  return monthsDaysLengh[month]
}
