//This is the main JavaScript file for the work day planner

//This function takes in and displays the local date and time in real-time using moment.js
function realTime() {
  var dateTime = moment().format("LLLL");
  console.log(dateTime);
  $("#currentDay").append(dateTime);
}
realTime();
console.log(realTime);

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
  var userObject = { text: userInput, time: hour };
  //Pushes the keys from the userObject into an array for organization
  storageVariable.push(userObject);
  //Sets the array
  localStorage.setItem("userArray", JSON.stringify(storageVariable));

  console.log(userInput);
  console.log(hour);
  console.log(userObject);
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
    console.log(i);
    console.log(storageVariable[i].text);
    var savedText = storageVariable[i].text;
    console.log(savedText);
  }
}
displaySavedText();

storageVariable.forEach(function(element) {
  console.log(element);
});

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
