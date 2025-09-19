setInterval(putTime,1000)
function getTime() {
    const d = new Date()
    const year = d.getFullYear()
    const monthy = d.getMonth() + 1
    const dayDate = d.getDate()
    const dayDay = d.getDay()
    let day = ""
    switch (dayDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    }
    let month = ""
    switch (monthy) {
        case 0:
            month = "January"
            break;
        case 1:
            month = "February"
            break;
        case 2:
            month = "March"
            break;
        case 3:
            month = "April"
            break;
        case 4:
            month = "May"
            break;
        case 5:
            month = "June"
            break;
        case 6:
            month = "July"
            break;
        case 7:
            month = "August"
            break;
        case 8:
            month = "September"
            break;
        case 9:
            month = "October"
            break;
        case 10:
            month = "November"
            break;
        case 11:
            month = "December"
            break;
    }
    let minutes = d.getMinutes()
    if(minutes < 10){
        minutes = "0"+minutes
    }
    const hourElement = document.getElementById("checky")
    const houry = d.getHours()
    let hour = ""
    let meridiem = ""
    if(!hourElement.checked){
        if(houry >= 12){
            hour = houry - 12
            meridiem = "pm"
        }else{
            hour = houry
            console.log(houry)
            meridiem = "am"
        }
    }else{
        hour = houry
        meridiem = ""
    }
    return {year,month,day,dayDate,hour,minutes,meridiem}
}
function putTime(){
    const dateElement = document.getElementById("Date")
    const timeElement = document.getElementById("Time")

    const {year,month,day,dayDate,hour,minutes,meridiem} = getTime()
    dateElement.innerHTML = dayDate + " of " + month + " of " + year + ", " + day

    timeElement.innerHTML = hour + ":" + minutes + " " + meridiem
}