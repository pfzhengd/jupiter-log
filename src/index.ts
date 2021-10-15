import { TConfig } from '../types'
import { formatDate } from './date'

function genPrefix (typeName:string):string {
  return `[${formatDate(config.dateFormatText, new Date())}][${typeName.toUpperCase()}][${config.moduleName}]`
}

export const config:TConfig = {
  moduleName: 'jupiter-log',
  mode: 'development',
  dateFormatText: 'hh:mm:ss'
}

/**
 * @description 日志通用方法
 * @author pfzheng
 * @date 2021-05-07
 * @param {string} typeName 日志的类型
 * @param {...any} rest  附带信息
 */
export function common (typeName:string, rest:Array<any>) {
  if (console) {
    if (rest.length === 1) {
      console[typeName](`${genPrefix(typeName)}`, rest[0])
    } else if (rest.length === 2) {
      console[typeName](`${genPrefix(typeName)}[${rest[0]}]`, rest[1])
    } else {
      console[typeName](`${genPrefix(typeName)}[${rest[0]}]`, rest[1], ...rest.slice(2))
    }
  }
}

/**
 * @description 警告日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const warn = function (...rest:any) {
  common('warn', rest)
}

/**
 * @description 错误日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const error = function (...rest:any) {
  common('error', rest)
}

/**
 * @description 打印日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const info = function (...rest:any) {
  common('log', rest)
}

/**
 * @description 打印调试日志
 * @param {*} name 第一个参数
 * @param {*} msg  第二个参数
 */
export const debug = function (...rest:any) {
  // 只有在开发模式下才会打印 debug 类型的日志
  if (config.mode === 'development') {
    common('debug', rest)
  }
}
