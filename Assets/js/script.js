var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector("#container");
var containerDivEl = document.querySelector("#containerDiv");

function getCurrDateAndTime() {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = now;
}

var hoursArry =
    [
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm"
    ];

function addHours() {
    for (var i = 0; i < hoursArry.length; i++) {

        var hour = document.createElement("div");
        hour.id = "hour" + hoursArry[i];
        hour.className = "col-2";
        hour.textContent = "hour";
        containerDivEl.appendChild(hour);

        var calendarEvent = document.createElement("div");
        calendarEvent.id = "calendarEvent" + hoursArry[i];
        calendarEvent.className = "col-8";
        calendarEvent.textContent = "calendarEvent";
        containerDivEl.appendChild(calendarEvent);

        var saveEvent = document.createElement("button");
        saveEvent.type = "button";
        saveEvent.id = "saveEvent" + hoursArry[i];
        saveEvent.className = "col-2";
        saveEvent.textContent = "saveEvent";
        containerDivEl.appendChild(saveEvent);
    }
}

function saveEvent (event) {
    console.log(event);
};

containerDivEl.addEventListener("click", saveEvent());

addHours();
getCurrDateAndTime();
