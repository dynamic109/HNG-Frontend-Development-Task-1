const currentUtcTime = document.querySelector('[data-testid="currentUTCTime"]')
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDay(){
    const date = new Date()
    const day = weekday[date.getDay()]
    currentDayOfTheWeek.textContent = `${day}, `
}

function getTimeInMilliseconds(){

    const date = new Date()
    const time = date.getTime()
    currentUtcTime.textContent =  time

}
getDay()
setInterval( getTimeInMilliseconds, 1000)

