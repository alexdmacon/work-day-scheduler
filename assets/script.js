var currentDayEl = $('#currentDay');
var currentHour = moment().format('HH');
var textAreaEls = $('textarea');
var timeBlockEls = $('.time-block');
var date = moment().format('MMM DD, YYYY');
var saveBtn = $('.saveBtn');
var row = $('row');


// Display today's date at the top of the page.
function displayDate() {
    currentDayEl.text(date);
}
displayDate();

// Change text block color depending on time of day
function colorCodeBlocks(){

// Here comes a method that will run on each individual time block div
    timeBlockEls.each(function () {

// parse each individual time block div (aka "this") and turn its HTML-defined id attribute (a number corresponding to a military-time hour, in this case) into an integer that we can subsequently refer to using the newly defined variable timeBlockHour
        var timeBlockHour = parseInt($(this).attr("id"));
        console.log(timeBlockHour);

// compare each individual time block id to the current hour and apply or remove the corresponding background color class to said text block (aka "this")
        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeBlockHour == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
    }
    }
    )
}

colorCodeBlocks()

// Clicking save buttons calls saveSchedule function
saveBtn.on("click", saveSchedule);

function saveSchedule(){

// Traverses the DOM by going from the clicked button (aka "this") to its siblings, grabbing the input value from the textarea sibling element
    var inputValue = $(this).siblings("textarea").val();

// Traverses the DOM by going from the clicked button (aka "this") to its parent div element (the row) and grabbing that div's HTML-assigned ID.
    var timeBlockID = $(this).parent().attr("id");

// Saves the above variables to localStorage as corresponding key and value, respectively
    localStorage.setItem(timeBlockID, inputValue);
};

// uses jquery and DOM to select individual textarea elements by id, retrieves data stored in local storage associated with corresponding key, then puts it as the value in respective textarea element. If no data stored, no value will be pulled.
function retrieveSchedule(){
    $("#15 textarea").val(localStorage.getItem("15"));
    $("#16 textarea").val(localStorage.getItem("16"));
    $("#17 textarea").val(localStorage.getItem("17"));
    $("#18 textarea").val(localStorage.getItem("18"));
    $("#19 textarea").val(localStorage.getItem("19"));
    $("#20 textarea").val(localStorage.getItem("20"));
    $("#21 textarea").val(localStorage.getItem("21"));
    $("#22 textarea").val(localStorage.getItem("22"));
    $("#23 textarea").val(localStorage.getItem("23"));
}

retrieveSchedule();


console.log(currentHour);