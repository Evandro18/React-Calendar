const dateMethods = {
  YYYY: 'getFullYear',
  mm: 'getMonth',
  dd: 'getDate',
  EE: 'getDay',
  MM: 'getMonth',
  DD: 'getDate'
}

export default class CustomDate extends Date {
  constructor(date) {
    const currentDate = date ? new Date(date) : new Date()
    super(currentDate)
  }

  getFormatPattern(pattern = 'YYYY/MM/DD') {
    const chars = pattern.split('')
    const patterns = chars.reduce((acc, item, i) => {
      const index = acc.findIndex((el) => el.includes(item))
      const isString = (text) => Boolean(text && text.match(/[A-Z, a-z]/))
      if (chars[i - 1] === item && isString(item)) {
        acc[index] += item
        return acc
      }
      acc.push(item)
      return acc
    }, [])
    return patterns
  }

  getFormatString(pattern, method, dayNames = [], months = []) {
    const getText = {
      EE: () => {
        const text = method && dayNames[this[method]()]
        if (pattern.length === 2) return (text && text.substr(0, 3)) || ''
        return text
      },
      MM: () => {
        const text = method && months[this[method]()]
        if (pattern.length === 2) return (text && text.substr(0, 3)) || ''
        return text
      }
    }
    return getText[pattern] && typeof getText[pattern] === 'function' ? getText[pattern]() : pattern
  }

  format({ dayNames = [], months = [], pattern = 'EE, MM YYYY' }) {
    const format = this.getFormatPattern(pattern)
    const formatted = format
      .map((el) => {
        const method = dateMethods[el]
        if (el.match(/[A-Z]/) && !el.includes('YYYY')) {
          return this.getFormatString(el, method, dayNames, months)
        }
        if (el.match(/[A-Z]/) && el.includes('mm')){
          return Number(this[method]()) + 1
        }
        if (method) return this[method]()
        return el
      })
      .join('')
    return formatted
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

  reset() {
    this.setHours(0, 0, 0, 0)
    return this
  }
}
