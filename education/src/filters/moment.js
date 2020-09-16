import dayjs from 'dayjs'
/**
 * @description 格式化时间
 * @param {String|Date} value 需要格式化的值
 * @param {String} format 时间格式
 */
export default function moment (value, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!value) return String(value)
  let str = ''
  let date = new Date(value)
  try {
    // console.log(date)
    str = dayjs(date).format(format)
  } catch (err) {
    str = err.message || ''
  }
  return str
}
