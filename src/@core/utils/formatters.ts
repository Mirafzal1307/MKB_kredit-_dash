import { isToday } from './index'

export const avatarText = (value: string) => {
  if (!value)
    return ''
  const nameArray = value.split(' ')

  return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

// TODO: Try to implement this: https://twitter.com/fireship_dev/status/1565424801216311297
export const kFormatter = (num: number) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g

  return Math.abs(num) > 9999 ? `${Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1))}k` : Math.abs(num).toFixed(0).replace(regex, ',')
}

/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Intl.DateTimeFormatOptions} formatting Intl object to format with
 */
export const formatDate = (value: string, formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value)
    return value

  return new Intl.DateTimeFormat('uz-Uz', formatting).format(new Date(value))
}

/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */
export const formatDateToMonthShort = (value: string, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting: Record<string, string> = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date))
    formatting = { hour: 'numeric', minute: 'numeric' }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}
export const formatteDateForScheduleTest = (dateTime: Date) => {
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(dateTime)

  const splittedDate = date.split(',')[0]

  let [month, day, year] = splittedDate.split('/')
  let time = date.split(',')[1].trim().slice(0, -1).slice(0, -1).trim()
  if (Number(time.split(':')[0]) < 10)
    time = `0${time}`
  if (Number(month) < 10)
    month = `0${month}`
  if (Number(day) < 10)
    day = `0${day}`

  return `20${year}-${month}-${day} ${time}`
}

export const formatDateAgendaItem = (dateTime: Date) => {
  const array = dateTime.toLocaleString().split('T')

  const [year, month, day] = array[0].split('-')
  const [hour, minute, second] = array[1].split(':')

  console.log(day)
  console.log(month)
  console.log(year)

  return `${day}.${month}.${year}  ${hour}:${minute}`
}

export function formatTimeLast(date: Date, showTime = true) {
  if (showTime)
    return useDateFormat(new Date(date), 'DD-MM-YYYY HH:mm').value

  else
    return useDateFormat(new Date(date), 'DD-MM-YYYY').value
}

