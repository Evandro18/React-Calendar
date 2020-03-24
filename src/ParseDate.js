export default function({ currentDate: date, dayNames = [], months = [] }) {
  const currentDate = date ? new Date(date) : new Date();
  return `${dayNames[currentDate.getDay()]}, ${
    months[currentDate.getMonth() + 1]
  }
  ${currentDate.getDate()}`;
}
