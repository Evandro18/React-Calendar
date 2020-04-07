export default class CustomDate extends Date {
  constructor(date) {
    const currentDate = date ? new Date(date) : new Date()
    super(currentDate)
  }

  format({ dayNames = [], months = [] }) {
    return `${dayNames[this.getDay()]}, ${months[this.getMonth()]}
    ${this.getDate()}`
  }

  set(key, value) {
    const options = {
      month: (data) => this.setMonth(data),
      date: (data) => this.setDate(data)
    }

    const func = options[key]
    if (func) func(value)
    return this
  }

  get(key) {
    const values = {
      date: this.getDate(),
      day: this.getDay(),
      month: this.getMonth(),
      year: this.getFullYear()
    }
    return values[key]
  }
}
