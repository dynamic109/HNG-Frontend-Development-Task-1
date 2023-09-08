const currentUtcTime = document.getElementById('current-utc-time')
const currentDayOfTheWeek = document.getElementById('current-day-of-the-week')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date()
const day = weekday[date.getDay()]
const hour = date.getHours()
const minute = date.getMinutes()

const time =  `${hour}:${minute}`

currentDayOfTheWeek.textContent = `${day}, `
currentUtcTime.textContent =  time