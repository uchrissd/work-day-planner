//This is the main JavaScript file for the work day planner

//This function takes in and displays the local date and time in real-time using moment.js
function realTime() {
  var dateTime = moment().format("LLLL");
  console.log(dateTime);
  $("#currentDay").append(dateTime);
}
realTime();
console.log(realTime);

var timeHour;
var hour;

//This function acts as an event lister. When any save button is clicked, the user input and the corresponding hour is saved to local storage

$("button:submit").on("click", function() {
  //This variable stores the user input
  var userInput = $(this)
    .closest("tr")
    .find("input:text")
    .val();

  //This variable stores the hour of time
  var hour = $(this).data("hour");
  //This object sets the keys for text and time for storage

  //Pushes the keys from the userObject into an array for organization

  //Index the userArray
  timeHour = $(this).attr("data-hour");

  //Sets the array
  localStorage.setItem(timeHour, userInput);

  console.log(userInput);
  console.log(hour);
});

//Global variable for parsing userArray from local storage into an array of accesible objects
var storageVariable = localStorage.getItem("userArray");
storageVariable = JSON.parse(storageVariable);

if (!storageVariable) {
  storageVariable = [];
}
console.log("this is a log" + storageVariable);

function displaySavedText() {
  for (var i = 0; i < storageVariable.length; i++) {
    var savedText = storageVariable[i].text;
    console.log("this is text:", savedText);
  }
}
displaySavedText();

storageVariable.forEach(function(element) {
  console.log(element);
});

var currentTime = moment().format("H");
console.log(currentTime);

var trArray = $(".hour").get();

for (var i = 0; i < trArray.length; i++) {
  var trId = parseInt(trArray[i].id);
  if (trId < parseInt(currentTime)) {
    console.log("this is trid: ", trId);
    trArray[i].classList.add("past");
    console.log(trArray[i]);

    var savedHour = trArray[i].id;
    var savedText = localStorage.getItem(hour);
    trArray[i].val = savedText;
    console.log("this is hour: ", savedHour);
    console.log(savedText);
  } else if (trId > parseInt(currentTime)) {
    console.log("this is trid: ", trId);
    trArray[i].classList.add("future");
    console.log(trArray[i]);

    var savedHour = trArray[i].id;
    var savedText = localStorage.getItem(hour);
    trArray[i].val = savedText;
    console.log("this is hour: ", savedHour);
    console.log(savedText);
  } else {
    trArray[i].classList.add("present");
    console.log(trArray[i]);

    var savedHour = trArray[i].id;
    var savedText = localStorage.getItem(hour);
    trArray[i].val = savedText;
    console.log("this is hour: ", savedHour);
    console.log(savedText);
  }
}
// function displaySaved() {
//   for (var i = 0; i < localStorage.userArray.text.length; i++) {
//     console.log("this is i" + i);
//     // var savedText = [i];
//     // console.log(savedText);
//     // var localText = localStorage.getItem(savedText);
//     // console.log("this is the display text" + localText);
//   }
// }

// console.log(localStorage.userArray);

// function displaySaved() {
//   for var (i = 0; i <localStorage)

// }

//To-do list
//Save user input to local storage
//Access user input from local storage
//Clear text iput area after user presses save button
//
