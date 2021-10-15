import { warn, info, debug, error, config } from '../src/index'

beforeAll(() => {
  config.moduleName = 'MoonJS'
  config.dateFormatText = 'yyyy-MM-dd hh:mm:ss'
})

test('1.检验 info 函数', () => {
  info('测试一个日志')
  info('类型', '打印了一个日志')
  info('类型', '打印了一个日志', { name: '张三' })
})

test('2.检验 warn 函数', () => {
  warn('测试一个警告日志')
  warn('类型', '这个函数发生了警告')
  warn('类型', '这个函数发生了警告', { a: 1 })
})

test('3.检验 error 函数', () => {
  error('测试一个错误日志')
  error('类型', '这个函数发生了错误')
  error('类型', '这个函数发生了错误', new Error('发生了未知错误'))
})

test('4.检验 debug 函数', () => {
  debug('测试一个 debug 日志')
  debug('类型', '这是一个  debug 日志')
  debug('类型', '这是一个  debug 日志', new Error('发生了未知错误'))
})
