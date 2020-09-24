import { reactive, toRefs } from 'vue'
import Util from '../utils/utils.js'

export default function timer() {
  let now = reactive({
    year: 0,
    month: 0,
    days: 0,
    hours: 0,
    minute: 0,
    second: 0
  })
  setInterval(() => {
    const { year, month, days, hours, minute, second } = Util.fetchNowInfo()
    now.year = year
    now.month = month
    now.days = days
    now.hours = hours
    now.minute = minute
    now.second = second
  }, 1000)
  return toRefs(now)
}