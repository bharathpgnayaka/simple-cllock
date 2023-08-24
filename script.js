setInterval(setclock, 1000) // call setclock for every 1000 milisecond
 
// for rotation of hands
const hourhand = document.querySelector('[data-hand-hour]')
const minutehand = document.querySelector('[data-hand-minute]')
const secondhand = document.querySelector('[data-hand-second]')

function setclock(){
    const currentdate = new Date() //current time
    const secondsratio = currentdate.getSeconds() / 60 // 60 secnds per minute
    const minutesratio = (secondsratio + currentdate.getMinutes()) / 60
    const hoursratio = (minutesratio + currentdate.getHours()) / 12

    setrotation(secondhand, secondsratio)
    setrotation(minutehand, minutesratio)
    setrotation(hourhand, hoursratio)
}

function setrotation(element, rotationratio){
    element.style.setProperty('--rotation', rotationratio*360)
}
setclock()