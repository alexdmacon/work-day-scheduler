# work-day-scheduler

## Description
This is a day planner/work scheduler I developed to learn more about concepts and practices involving third-party APIs, and to continue experimenting with JavaScript and CSS fundamentals. To that end, this app uses the JQuery library for easy DOM traversal and element selection. It uses Bootstrap as a framework for column and row sizing and some other features, and it uses Moment.js for features that depend on the current time.

The individual time blocks here are color-coded to respond to the time of day: Gray for hours that have already passed, red for the current hour, and green for the hours ahead. (I was developing this primarily at night, so for easy testing, it uses an awkward "work day" schedule of 3 to 11 p.m.) The user can type out the description of an appointment/meeting/event, and then click the blue button next to the description to save it to LocalStorage. If the user refreshes the page, their saved input is retrieved from LocalStorage and will continue to display.

![Gif demonstrating the scheduler in action](/assets/demo/work-day-scheduler-demo.gif)

## Installation
Download the files and then view the code. 
- The app was deployed via GitHub Pages and is live here: https://alexdmacon.github.io/work-day-scheduler/
- The GitHub repository is here: https://github.com/alexdmacon/work-day-scheduler

## Usage
Input the description of an appointment/meeting/event into the text box next to the appropriate time. Click the blue button with the lock icon to save your inputted text for future reference. This page is best viewed on a desktop.

## Credits
Thanks as always to my wife and coding tutor, who provided invaluable advice and tips. Shout-out also to the SMU Full-Stack Web Development course instructors and teaching assistants. 
I referred to many web pages and references. These were some of the most helpful:
- https://getbootstrap.com/docs/4.0/components/forms/*/
- https://getbootstrap.com/docs/4.0/layout/grid/
- https://jqueryui.com/
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
- https://stackoverflow.com/questions/7892446/how-to-save-to-localstorage-from-textarea
- https://stackoverflow.com/questions/34767630/typeerror-addeventlistener-is-not-a-function
- https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te
- https://momentjs.com/
- https://stackoverflow.com/questions/25167612/how-does-one-change-the-colour-of-a-div-based-on-current-time