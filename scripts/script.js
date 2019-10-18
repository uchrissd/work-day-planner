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
  var storageVariable = localStorage.getItem("userArray");
  storageVariable = JSON.parse(storageVariable);
  console.log(storageVariable);
  if (!storageVariable) {
    storageVariable = [];
  }

  //This variable stores the user input

  var userInput = $(this)
    .closest("tr")
    .find("input:text")
    .val();
  //This variable stores the hour of time
  var hour = $(this).data("hour");

  var userObject = { text: userInput, time: hour };

  storageVariable.push(userObject);

  localStorage.setItem("userArray", JSON.stringify(storageVariable));

  console.log(userInput);
  console.log(hour);
  console.log(userObject);
});

//To-do list
//Save user input to local storage
//Access user input from local storage
//Clear text iput area after user presses save button
//
