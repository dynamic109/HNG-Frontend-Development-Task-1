const currentUtcTime = document.querySelector('[data-testid="currentUTCTime"]')
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDay(){
    const date = new Date()
    const day = weekday[date.getDay()]
    currentDayOfTheWeek.textContent = `${day}, `
}

function getTime(){

    const date = new Date()
    const time = date.getMilliseconds()
    currentUtcTime.textContent =  time

}
getDay()
setInterval( getTime, 1000)

