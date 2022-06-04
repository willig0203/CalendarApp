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


// // save in tasks array
// tasks.toDo.push({
//   text: taskText,
//   date: taskDate
// });

// saveTasks();


function makeDayDisplay() {
    for (var i = 0; i < hoursArry.length; i++) {
        //hour
        var taskLi = $("<li>").addClass("hour list-group-item");
        var taskP = $("<p>").addClass("m-1").text(hoursArry[i]);
        taskLi.append(taskP);
        $("#list-c1").append(taskLi);
        //event
        var taskLi = $("<li>").addClass("list-group-item");
        var taskP = $("<p>").addClass("m-1").text("event");
        taskLi.append(taskP);
        $("#list-c2").append(taskLi);
        // save
        var taskLi = $("<li>").addClass("saveBtn list-group-item");
        var taskP = $("<label>").addClass("m-1").text("s");
        taskLi.append(taskP);
        $("#list-c3").append(taskLi);
    }
};

$(".list-group").on("click", "label", function () {    
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
  
    // get status type and position in the list
    var status = $(this)
      .closest(".list-group")
      .attr("id")
      .replace("list-", "");
    var index = $(this)
      .closest(".list-group-item")
      .index();
  
    // // update task in array and re-save to localstorage
    // tasks[status][index].text = text;
    // saveTasks();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(taskP);
  });


var updateListTimeColors = function () {

    debugger
    // current time
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now);

    // list and childer items
    var itemListToColor = document.querySelector("#list-c2");
    // each child gets a chance
    for (var li of itemListToColor.children) {
        console.log(li);
    }

    // we compare the times



    // $(taskEl).removeClass("hour list-group-item past present future");

    // if (moment().isAfter(time)) {
    //   $(taskEl).addClass("list-group-item-danger");
    // }
    // else if (Math.abs(moment().diff(time, "days")) <= 2) {
    //   $(taskEl).addClass("list-group-item-warning");
    // }
};

setInterval(function () {
    $(".card .list-group-item").each(function (index, el) {
        updateListTimeColors(el);
    });
}, (1000 * 60) * .25); // 1/4 min



makeDayDisplay();
getCurrDateAndTime();

