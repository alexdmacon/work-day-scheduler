// /*https://getbootstrap.com/docs/4.0/components/forms/*/
// https://getbootstrap.com/docs/4.0/layout/grid/
// https://jqueryui.com/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
// https://stackoverflow.com/questions/7892446/how-to-save-to-localstorage-from-textarea
// https://stackoverflow.com/questions/34767630/typeerror-addeventlistener-is-not-a-function
// https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te
// https://momentjs.com/
// https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load


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

// Call this function to each individual time block div
    timeBlockEls.each(function () {

// parse each individual time block and turn its HTML-defined id (a number corresponding to a military-time hour, in this case) into an integer that we can subsequently refer to using timeBlockHour
        var timeBlockHour = parseInt($(this).attr("id"));
        console.log(timeBlockHour);

// compare each individual time block id to the current hour and apply or remove the corresponding background color class to said text block
        if (timeBlockHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlockHour == currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
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
}

// uses jquery and DOM to select individual textarea elements by id, retrieves data stored in local storage associated with corresponding key, puts it as the value in respective textarea element. If no data stored, no value will be pulled.
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


console.log(currentHour)