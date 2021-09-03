// /*https://getbootstrap.com/docs/4.0/components/forms/*/
// https://getbootstrap.com/docs/4.0/layout/grid/
// https://jqueryui.com/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit




var currentDayEl = $('#currentDay');
var currentHour = moment().format('HH');
var textAreaEls = $('textarea');
var timeBlockEls = $('.time-block');
var date = moment().format('MMM DD, YYYY');
var saveBtn = $('.saveBtn');
var row = $('row');


function displayDate() {
    currentDayEl.text(date);
}
displayDate();


// Change text block color depending on time of day
function colorCodeBlocks(){

// Apply this function to each individual time block div
    timeBlockEls.each(function () {

// parse each individual time block and turn its HTML-defined id (a number corresponding to a military-time hour, in this case) into an integer that we can subsequently refer to using timeBlockHour
        var timeBlockHour = parseInt($(this).attr("id"));
        console.log(timeBlockHour);

// compare the returned integer to the current hour and apply or remove the corresponding background color classes
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

console.log(currentHour)

textAreaEls.text.currentHour;







/* ## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */