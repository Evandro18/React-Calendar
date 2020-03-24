import React, { useState, useEffect } from "react";
import "./styles.css";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import getMonthsLength from "./getDaysInMonth";
import { dayNames, monthNames as months } from "./contants";

export default function App({ weekDayNames, monthNames, date }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentDate, setDate] = useState(new Date("2020-03-04"));
  const [month, setMonth] = useState({});

  const buildMonth = () => {
    const daysInMonth = getMonthsLength(currentDate);
    const weekLength = 7;
    const qtdWeek = Math.ceil(daysInMonth / weekLength);
    const weeks = [...new Array(qtdWeek)].map((_, i) => i + 1);
    const daysByWeek = [...new Array(weekLength)].map((_, i) => i + 1);
    let count = 1;
    const generateMonth = {};
    for (const weekIndex of weeks) {
      if (!generateMonth[weekIndex]) generateMonth[weekIndex] = {};
      // eslint-disable-next-line
      const currentWeek = daysByWeek.reduce((acc, dayIndex) => {
        if (count <= daysInMonth) {
          acc[dayIndex] = count++;
        }
        return acc;
      }, {});
      generateMonth[weekIndex] = currentWeek;
    }
    setMonth(generateMonth);
  };

  useEffect(() => {
    if (date !== currentDate) {
      buildMonth();
      setDate(date);
    }
  }, [date, setDate, currentDate]);

  return (
    <div className="App">
      <div className="calendar">
        <CalendarHeader
          currentDate={currentDate}
          currentYear={year}
          dayNames={weekDayNames ? weekDayNames : dayNames}
          months={monthNames ? monthNames : months}
        />
        <CalendarDays weekDays={dayNames} month={month} />
      </div>
    </div>
  );
}
