var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector("#container");
var containerDivEl = document.querySelector("#containerDiv");

function getCurrDateAndTime() {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDayEl.textContent = now;
};

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


var eventsArry = [];
var eventItem = {};

var loadEvents = function () {
    // debugger
    eventsArry = JSON.parse(localStorage.getItem("eventsList"));
 
    // could add a date check
    if (!eventsArry) {
        return;
    } 
    // else {
    //     console.log("load existing events");
    //     var itemList = document.querySelector("#list-c2");
    //     for (var i = 0; i < 9; i++) {
    //         var li = itemList.children[i];
    //         var txt = eventsArry[i];
    //         li.textContent = txt;
    //     };
    // };
};

var saveEvents = function () {
    // debugger
    eventsArry.length = 0;

    // overwrites all calandar events
    // make each button work
    // list and children items
    var itemList = document.querySelector("#list-c2");
    for (var i = 0; i < 9; i++) {
        var li = itemList.children[i];
        var txt = $(li).text();
        console.log(txt);
        eventsArry.push(txt);
    };

    localStorage.setItem("eventsList", JSON.stringify(eventsArry));
    console.log(eventsArry);
};




function makeDayDisplay() {
    if (eventsArry.length===0){

 
    for (var i = 0; i < hoursArry.length; i++) {
        //hour
        var taskLi = $("<li>").addClass("hour list-group-item");
        var taskP = $("<p>").addClass("m-1").text(hoursArry[i]);
        taskLi.append(taskP);
        $("#list-c1").append(taskLi);
        //event
        var taskLi = $("<li>").addClass("list-group-item");
        var taskP = $("<p>").addClass("m-1").text("add event");
        taskLi.append(taskP);
        $("#list-c2").append(taskLi);
        // save
        var taskLi = $("<li>").addClass("saveBtn list-group-item");
        var taskP = $("<label>").addClass("m-1").text("s");
        taskLi.append(taskP);
        $("#list-c3").append(taskLi);
    }
}else{
    for (var i = 0; i < hoursArry.length; i++) {
        //hour
        var taskLi = $("<li>").addClass("hour list-group-item");
        var taskP = $("<p>").addClass("m-1").text(hoursArry[i]);
        taskLi.append(taskP);
        $("#list-c1").append(taskLi);
        //event
        var taskLi = $("<li>").addClass("list-group-item");
        var taskP = $("<p>").addClass("m-1").text(eventsArry[i]);
        taskLi.append(taskP);
        $("#list-c2").append(taskLi);
        // save
        var taskLi = $("<li>").addClass("saveBtn list-group-item");
        var taskP = $("<label>").addClass("m-1").text("s");
        taskLi.append(taskP);
        $("#list-c3").append(taskLi);
    }
}
};

$(".list-group").on("click", "label", function () {
    saveEvents();
    console.log("save button");
});

// task text was clicked
$(".list-group").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$(".list-group").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // recreate p element
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);

    // saveEvents(this);

});

var updateListTimeColors = function () {  //nowTime) {

    // current time
    var nowTime = moment().format("ha");

    // list and children items
    var itemListToColor = document.querySelector("#list-c2");

    var colorsArry = [];

    if (nowTime.includes('am')) {
        var now = parseInt(nowTime.replace('am', ''));

        if (now === 12) {
            colorsArry = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //all future
        };
        if (now < 9) {
            colorsArry = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //all future
        };
        if (now === 9) {
            colorsArry = [1, 0, 0, 0, 0, 0, 0, 0, 0]; //present
        };
        if (now === 10) {
            colorsArry = [-1, 1, 0, 0, 0, 0, 0, 0, 0]; //-1 = past
        };
        if (now === 11) {
            colorsArry = [-1, -1, 1, 0, 0, 0, 0, 0, 0];
        };
        for (var i = 0; i < 9; i++) {
            var li = itemListToColor.children[i];
            $(li).removeClass("past present future");

            switch (colorsArry[i]) {
                case -1:
                    $(li).addClass("past");
                    break;
                case 1:
                    $(li).addClass("present");
                    break;
                case 0:
                    $(li).addClass("future");
                    break;
                default:
                // code block
            };
        };
    };
    if (nowTime.includes('pm')) {
        var now = parseInt(nowTime.replace('pm', ''));
        if (now === 12) {
            colorsArry = [-1, -1, -1, 1, 0, 0, 0, 0, 0];
        };
        if (now === 1) {
            colorsArry = [-1, -1, -1, -1, 1, 0, 0, 0, 0];
        };
        if (now === 2) {
            colorsArry = [-1, -1, -1, -1, -1, 1, 0, 0, 0];
        };
        if (now === 3) {
            colorsArry = [-1, -1, -1, -1, -1, -1, 1, 0, 0];
        };
        if (now === 4) {
            colorsArry = [-1, -1, -1, -1, -1, -1, -1, 1, 0];
        };
        if (now === 5) {
            colorsArry = [-1, -1, -1, -1, -1, -1, -1, -1, 1];
        };
        if (now > 5 && now != 12) {
            colorsArry = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
        };
        for (var i = 0; i < 9; i++) {
            var li = itemListToColor.children[i];
            $(li).removeClass("past present future");

            switch (colorsArry[i]) {
                case -1:
                    $(li).addClass("past");
                    break;
                case 1:
                    $(li).addClass("present");
                    break;
                case 0:
                    $(li).addClass("future");
                    break;
                default:
                // code block
            };
        };
    };
};

loadEvents();

makeDayDisplay();
getCurrDateAndTime();
updateListTimeColors();

setInterval(function () {
    $(".card .list-group-item").each(function (index, el) {
        getCurrDateAndTime();
        updateListTimeColors(el);
    });
}, (1000 * 60) * 1); // 1 min








