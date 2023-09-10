const currentUtcTime = document.querySelector('[data-testid="current-utc-time"]')
const currentDayOfTheWeek = document.querySelector('[data-testid="current-day-of-the-week"]')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDay(){
    const date = new Date()
    const day = weekday[date.getDay()]
    currentDayOfTheWeek.textContent = `${day}, `
}

function getTime(){

    const date = new Date()
    const time = date.getTime()
    currentUtcTime.textContent =  time

}
getDay()
setInterval( getTime, 1000)

