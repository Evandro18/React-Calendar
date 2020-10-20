import React, { useState, useEffect, useCallback, useContext } from 'react'
import RangeContext from '../../../context/range'
import PropTypes from 'prop-types'
import '../../../css/custom-calendar-styles.css'
import CalendarHeader from '../Header'
import CalendarDays from '../CalendarDays'
import MonthsSelect from '../MonthsSelect'
import YearSelect from '../YearSelect'
import ParserDate from '../../../utils/ParseDate'
import getMonthsLength from '../../../utils/getDaysInMonth'
import { dayNames, monthNames as months, ENUM_TYPES } from '../../../utils/constants'

export default function App({
  weekDayNames,
  monthNames,
  date,
  type = 'onlydate',
  value = [],
  footer,
  onChange = () => { }
}) {
  const { dates, setDates } = useContext(RangeContext)
  const [currentDate, setDate] = useState(new ParserDate())
  const [showDate, setShowDate] = useState(new ParserDate())
  const [month, setMonth] = useState(null)
  const [selectYear, setSelectYear] = useState(false)

  const buildMonthCallback = useCallback(() => {
    const daysInMonth = getMonthsLength(showDate)
    const tempDate = new ParserDate(showDate)
    tempDate.set('date', 1)
    const weekLength = 7
    const firstWeekDayOfMonth = tempDate.get('day') + 1
    const firstWeekLength = weekLength - (weekLength - firstWeekDayOfMonth)
    tempDate.set('date', daysInMonth)
    const lastDay = tempDate.get('day') + 1
    const lastWeekLength = weekLength - (weekLength - lastDay)
    const seila = daysInMonth - (lastWeekLength + firstWeekLength)

    const qtdWeek = Math.ceil(seila / weekLength) + ((firstWeekLength > 0 ? 1 : 0) + (lastWeekLength > 0 ? 1 : 0))
    const weeks = [...new Array(qtdWeek)].map((_, i) => i + 1)
    const daysByWeek = [...new Array(weekLength)].map((_, i) => i + 1)
    let count = 1
    let generateMonth = null
    for (const weekIndex of weeks) {
      // eslint-disable-next-line
      const currentWeek = daysByWeek.reduce((acc, dayIndex) => {
        if (dayIndex === firstWeekDayOfMonth && !generateMonth) {
          generateMonth = {}
          if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {}
          acc[dayIndex] = count
          count++
          return acc
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
  }, [showDate])

  useEffect(() => {
    if (!date) {
      buildMonthCallback()
    }
  }, [date, setDate, currentDate, buildMonthCallback])

  useEffect(() => {
    if (value && value.length) {
      const firstDate = new ParserDate(value[0])
      const lastDate = new ParserDate(value[value.length - 1])
      const mapValues = new Map()
      const diff = diffInDays(firstDate, lastDate)
      if (firstDate && !lastDate && diff >= 1) {
        const newRange = buildRange(firstDate, lastDate)
        newRange.forEach((el) => upsertDateValues(mapValues, el))
        setDates(mapValues)
      }
    }
  }, [value])

  function onChangeYear(value) {
    const newDate = new ParserDate(showDate)
    newDate.setFullYear(value)
    setShowDate(newDate)
  }

  function onChangeMonth(value) {
    const newDate = new ParserDate(showDate)
    newDate.set('month', value)
    setShowDate(newDate)
  }

  const onChangeDate = (value) => () => {
    if (value) {
      const newDate = new ParserDate(showDate)
      newDate.set('date', value)
      if (ENUM_TYPES[type] === ENUM_TYPES.onlydate) {
        setDate(newDate)
        setShowDate(newDate)
        onChange(newDate)
      }
      if (ENUM_TYPES[type] === ENUM_TYPES.selector) {
        setDate(newDate)
        setShowDate(newDate)
        let values = new Map([...dates])
        values = upsertDateValues(values, newDate)
        setDates(values)
        setShowDate(values)
        onChange(values)
      }
      if (ENUM_TYPES[type] === ENUM_TYPES.range) {
        let values = new Map()
        let datesCopy = [...dates]
        const [, start] = datesCopy[0] ? datesCopy[0] : []
        const [, end] = datesCopy.length - 1 > 0 ? datesCopy[datesCopy.length - 1] : []
        if (start && end) {
          values = upsertDateValues(values, newDate)
          setDates(values)
          setShowDate(values)
        }
        const diff = diffInDays(start, newDate)
        if (start && !end && newDate && diff >= 1) {
          const newRange = buildRange(start, newDate)
          newRange.forEach((el) => upsertDateValues(values, el))
          setDates(values)
          setShowDate(values)
        }
        if (diff <= 0) {
          if (!values.get(newDate.reset().toJSON())) {
            values = upsertDateValues(values, newDate)
          }
          setDates(values)
          setShowDate(values)
        }
        onChange([...values])
      }
      setDate(newDate)
      setShowDate(newDate)
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
      const dateToReturn = new ParserDate(`${countYears}-${countMonths}-${strCountDays}  00:00:00:00`)
      if (countDays >= lastDayOfMonth) {
        countDays = 0
        if (countMonths >= 12) {
          countYears++
          countMonths = 0
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

  const body = () => {
    if (selectYear) {
      return (
        <YearSelect
          currentYear={showDate.getFullYear()}
          onChange={(value) => {
            onChangeYear(value)
            setSelectYear(false)
          }}
        />
      )
    }
    return (
      <>
        <MonthsSelect
          currentDate={showDate}
          currentMonth={showDate.get('month')}
          months={monthNames ? monthNames : months}
          onChange={onChangeMonth}
        />
        <CalendarDays
          type={type}
          currentMonth={currentDate.get('month')}
          currentYear={currentDate.getFullYear()}
          weekDays={weekDayNames ? weekDayNames : dayNames}
          monthStructure={month}
          currentDate={currentDate}
          showDate={showDate}
          dates={dates}
          onChange={onChangeDate}
        />
      </>
    )
  }

  return (
    <div className='App'>
      <div className='calendar'>
        <CalendarHeader
          currentDate={currentDate}
          showYear={showDate.getFullYear()}
          dayNames={weekDayNames ? weekDayNames : dayNames}
          months={monthNames ? monthNames : months}
          onClick={() => setSelectYear(true)}
        />
        {body()}
        {footer}
      </div>
    </div>
  )
}

App.propTypes = {
  type: PropTypes.oneOf(['onlydate', 'selector', 'range']),
  weekDayNames: PropTypes.arrayOf(PropTypes.string),
  monthNames: PropTypes.arrayOf(PropTypes.string)
}
