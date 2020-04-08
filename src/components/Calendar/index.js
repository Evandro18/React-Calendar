import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import '../../css/styles.css'
import CalendarHeader from './Header'
import CalendarDays from './CalendarDays'
import MonthsSelect from './MonthsSelect'
import ParserDate from '../../utils/ParseDate'
import getMonthsLength from '../../utils/getDaysInMonth'
import { dayNames, monthNames as months, ENUM_TYPES } from '../../utils/contants'

export default function App({
  onCancel,
  onFinish,
  weekDayNames,
  monthNames,
  date,
  type = 'onlydate',
  value = []
}) {
  const [dates, setDates] = useState(
    new Map([[new ParserDate().reset().toJSON(), new ParserDate()]])
  )
  const [currentDate, setDate] = useState(new ParserDate())
  const [month, setMonth] = useState(null)

  const buildMonthCallback = useCallback(() => {
    const daysInMonth = getMonthsLength(currentDate)
    const tempDate = new ParserDate(currentDate)
    tempDate.set('date', 1)
    const firstWeekDayOfMonth = tempDate.get('day') + 1
    const weekLength = 7
    const qtdWeek = Math.ceil(daysInMonth / weekLength)
    const weeks = [...new Array(qtdWeek)].map((_, i) => i + 1)
    const daysByWeek = [...new Array(weekLength)].map((_, i) => i + 1)
    let count = 1
    let generateMonth = null
    for (const weekIndex of weeks) {
      // eslint-disable-next-line
      const currentWeek = daysByWeek.reduce((acc, dayIndex) => {
        if (dayIndex >= firstWeekDayOfMonth && !generateMonth) {
          generateMonth = {}
          if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {}
          acc[dayIndex] = count
        }
        if (count <= daysInMonth && generateMonth) {
          if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {}
          acc[dayIndex] = count++
        }
        return acc
      }, {})
      generateMonth[weekIndex] = currentWeek
    }
    setMonth(generateMonth)
  }, [currentDate])

  useEffect(() => {
    if (!date) {
      buildMonthCallback()
    }
  }, [date, setDate, currentDate, buildMonthCallback])

  useEffect(() => {
    if (value && value.length) {
      const date1 = new ParserDate(value[0])
      const date2 = new ParserDate(value[value.length - 1])
      const mapValues = new Map()
      const diff = diffInDays(date1, date2)
      if (date1 && !date2 && newDate && diff >= 1) {
        const newRange = buildRange(date1, date2)
        newRange.forEach((el) => upsertDateValues(mapValues, el))
        setDates(mapValues)
      }
    }
  }, [value])

  function onChange(value) {
    const newDate = new ParserDate(currentDate)
    newDate.set('month', value)
    setDate(newDate)
    buildMonthCallback()
  }

  const onChangeDate = (value) => () => {
    if (value) {
      const newDate = new ParserDate(currentDate)
      newDate.set('date', value)
      if (ENUM_TYPES[type] === ENUM_TYPES.onlydate) {
        setDate(newDate)
      }
      if (ENUM_TYPES[type] === ENUM_TYPES.selector) {
        setDate(newDate)
        let values = new Map([...dates])
        values = upsertDateValues(values, newDate)
        setDates(values)
      }
      if (ENUM_TYPES[type] === ENUM_TYPES.range) {
        let values = new Map()
        let datesCopy = [...dates]
        const [, start] = datesCopy[0] ? datesCopy[0] : []
        const [, end] = datesCopy.length - 1 > 0 ? datesCopy[datesCopy.length - 1] : []
        if (start && end) {
          values = upsertDateValues(values, newDate)
          setDates(values)
        }
        const diff = diffInDays(start, newDate)
        if (start && !end && newDate && diff >= 1) {
          const newRange = buildRange(start, newDate)
          newRange.forEach((el) => upsertDateValues(values, el))
          setDates(values)
        }
        if (diff <= 0) {
          if (!values.get(newDate.reset().toJSON())) {
            values = upsertDateValues(values, newDate)
          }
          setDates(values)
        }
      }
      setDate(newDate)
    }
  }

  const buildRange = (startRange, endRange) => {
    let countDays = startRange.getUTCDate()
    let countMonths =
      startRange.get('month') < 12 ? startRange.get('month') + 1 : startRange.get('month')
    let countYears = startRange.get('year')
    let lastDayOfMonth = getMonthsLength(startRange)
    const qtdRange = diffInDays(startRange, endRange)
    const newRange = []
    let count = 0
    while (count < [...new Array(qtdRange + 1)].length) {
      const strCountDays = String(countDays).length === 1 ? `0${countDays}` : countDays
      const dateToReturn = new ParserDate(`${countYears}-${countMonths}-${strCountDays}  00:00:00`)
      if (countDays >= lastDayOfMonth) {
        countDays = 0
        if (countMonths >= 12) {
          countYears++
          countMonths = 1
        }
        if (countMonths < 12) {
          countMonths++
          const dateOfNewMonth = new ParserDate(`${countYears}-${countMonths}-0${countDays + 1}`)
          lastDayOfMonth = getMonthsLength(dateOfNewMonth)
        }
      }
      countDays += 1
      newRange.push(dateToReturn)
      count++
    }
    return newRange
  }

  const diffInDays = (rangeStart, rangeEnd) => {
    if (!rangeStart || !rangeEnd) return 0
    const _MS_PER_DAY = 1000 * 60 * 60 * 24
    const utc1 = Date.UTC(rangeStart.get('year'), rangeStart.get('month'), rangeStart.get('date'))
    const utc2 = Date.UTC(rangeEnd.get('year'), rangeEnd.get('month'), rangeEnd.get('date'))
    const diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY)
    return diffDays
  }

  const upsertDateValues = (map, dateValue) => {
    if (dateValue) {
      dateValue.setHours(0, 0, 0, 0)
      if (map.has(dateValue.toJSON())) map.delete(dateValue.toJSON())
      else map.set(dateValue.toJSON(), dateValue)
    }
    return map
  }

  return (
    <div className='App'>
      <div className='calendar'>
        <CalendarHeader
          currentDate={currentDate}
          currentYear={currentDate.getFullYear()}
          dayNames={weekDayNames ? weekDayNames : dayNames}
          months={monthNames ? monthNames : months}
        />
        <MonthsSelect
          currentDate={currentDate}
          currentMonth={currentDate.get('month')}
          months={monthNames ? monthNames : months}
          onChange={onChange}
        />
        <CalendarDays
          type={type}
          currentMonth={currentDate.get('month')}
          currentYear={currentDate.getFullYear()}
          weekDays={dayNames}
          monthStructure={month || {}}
          currentDate={currentDate}
          dates={dates}
          onChange={onChangeDate}
        />
        <div className='footer-buttons'>
          <button className='button' onClick={onCancel}>
            Cancel
          </button>
          <button className='button' onClick={() => onFinish([...dates])}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  type: PropTypes.oneOf(['onlydate', 'selector', 'range']),
  weekDayNames: PropTypes.arrayOf(PropTypes.string),
  monthNames: PropTypes.arrayOf(PropTypes.string)
}
