export default {
  fetchNowInfo() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const days = now.getDate()
    const hours = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    return {
      year, month, days, hours, minute, second
    }
  }
}