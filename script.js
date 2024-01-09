setInterval(function() {
    let currentDate = new Date();
    time = {
        hour : addZero(set12HourClock(currentDate.getHours())),
        minute : addZero(currentDate.getMinutes()),
        seconds : addZero(currentDate.getSeconds()),
        meridiem : setMeridiem(currentDate.getHours())
    }
    setClockByID(time);
}, 1000);

//Convert 24 hr to 12 hr clock
function set12HourClock(currentHour){
    return currentHour % 12 == 0 ? 0 : currentHour;
}

//Add zero if the time is 1 digit
function addZero(hms){
    return hms < 10 ? "0" + hms : hms;
}

//Identify meridiem
function setMeridiem(currentHour){
    return currentHour < 12 ? "AM" : "PM"; 
}

//Assigning each value to the assigned items
function setClockByID(time){
    let hourID = document.getElementById("hour");
    hourID.textContent = time.hour;

    let minuteID = document.getElementById("minute");
    minuteID.textContent = time.minute;
    
    let secondsID = document.getElementById("seconds");
    secondsID.textContent = time.seconds;

    let meridiemID = document.getElementById("meridiem");
    meridiemID.textContent = time.meridiem;
}
