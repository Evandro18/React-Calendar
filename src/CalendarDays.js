import React from "react";
import "./CalendarDays.css";

export default function CalendarDays({ weekDays = [], month }) {
  const weekIndexs = Object.keys(month).map(el => el);
  // console.log(weekIndexs);
  const getWeekDays = indexDay => {
    return weekIndexs.map(week => {
      return (
        <div
          className="calendar-days-item-spacing-day"
          key={`current-day-${indexDay}`}
        >
          {month[week][indexDay]}
        </div>
      );
    });
  };
  return (
    <div>
      <div className="calendar-days">
        {weekDays.map((name, index) => (
          <>
            <div key={`week-${index + 1}`} className="calendar-days-item">
              {`${name.substr(0, 3)}`}
              <div key={index}>{getWeekDays(index + 1)}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
