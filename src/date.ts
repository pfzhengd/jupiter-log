import { TDate } from '../types'
import { error } from './index'

const _toString = Object.prototype.toString
export function isString (obj: any): Boolean {
  return typeof obj === 'string'
}

export function fullTime (time: string | number): string {
  let value: number
  if (isString(time)) {
    value = parseInt(time as string)
  } else {
    value = time as number
  }
  return (value >= 10 ? value : '0' + value).toString()
}

/**
 * @description 根据参数返回年月日时分秒对象,为空则返回当前时间
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {(string|Date)} param
 * @returns {TDate}
 */
export function getDate (param: string | number | Date): TDate {
  const date: Date = (isString(param) || typeof param === 'number')
    ? new Date(param)
    : (param as Date) || new Date()
  return {
    years: date.getFullYear(),
    months: date.getMonth() + 1,
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

/**
 * @description 格式化日期,format是格式化的格式，date是要格式化的日期
 * @author pfzheng
 * @date 2020-08-03
 * @export
 * @param {string} format
 * @param {(Date|string)} data
 * @returns
 */
export function formatDate (
  format: string,
  data: Date | string | number | TDate
):Date | string | number | TDate {
  if (_toString.call(data) === '[object Null]' || _toString.call(data) === '[object Undefined]') {
    return data
  }
  if (typeof format !== 'string') {
    error('format is not defined.')
    return data
  }
  const date: TDate = Object.prototype.hasOwnProperty.call(data as TDate, 'years')
    ? (data as TDate)
    : getDate(data as Date | string)
  return format
    .replace(/yyyy/gi, date.years.toString())
    .replace(/MM/, fullTime(date.months))
    .replace(/dd/gi, fullTime(date.days))
    .replace(/hh/gi, fullTime(date.hours))
    .replace(/mm/, fullTime(date.minutes))
    .replace(/ss/gi, fullTime(date.seconds))
}
