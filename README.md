## 使用说明

### 使用环境
- 浏览器  
- node

### 日志输出格式

`时间 / 项目名称 / 日志类型（可选） / 日志信息 / 代码执行栈（可选）`

### 举例说明
```JS
warn('event','点击事件中得到的参数不是有效的结构',args)
// 结果：[2021-09-24][项目名][event]点击事件中得到的参数不是有效的结构 {paramName:undefined}
```

### 支持类型

方法名 | 参数 | 说明
---------|----------|---------
 info | [...rest]:Array | 用于打印信息场景
 warn | [...rest]:Array  | 用于打印警报信息场景
 error | [...rest]:Array | 用于打印错误信息场景
 debug | [...rest]:Array | 用于打印调试信息场景（mode=development)有效

 ### 配置说明
 项目会导出一个 config 类，用于与外部使用者对接配置。

属性名 | 默认值 | 说明
---------|----------|---------
 moduleName | bos-fe-log-node | 全局配置模块/项目名称
 mode | development | 可选 development / production 两种模式


### 单元测试用例 
```js
import { warn, info, debug, error, config } from '../src/index'

beforeAll(() => {
  config.moduleName = 'MoonJS'
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

```

