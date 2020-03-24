import React from "react";
import "./styles.css";
import Year from "./Years";
import ParseDate from "./ParseDate";

export default function CalendarHeader({
  currentYear,
  currentDate,
  dayNames,
  months
}) {
  const formattedDate = ParseDate({ currentDate, dayNames, months });
  return (
    <>
      <div className="header">
        <div className="header-container full-width margin-item">
          <Year classNames={"header-item"} currentYear={currentYear} />
          <div className="header-item-grow-2" />
        </div>
        <div className="margin-item header-date">{formattedDate}</div>
      </div>
    </>
  );
}