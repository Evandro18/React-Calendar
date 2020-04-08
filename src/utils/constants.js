export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const ENUM_TYPES = {
  onlydate: 0,
  range: 1,
  selector: 2
}

export const TODAY = new Date()
export const YEAR_RANGE = 120
export const INITIAL_YEAR = TODAY.getFullYear() - YEAR_RANGE
export const FINAL_YEAR = TODAY.getFullYear() + YEAR_RANGE

export default {
  monthNames
}
