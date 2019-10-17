//This is the main JavaScript file for the work day planner

//Event listener for the save button

$("button:submit").bind("click", function() {
  //This variable stores the user input
  var userInput = $(this)
    .closest("tr")
    .find("input:text")
    .val();
  //This variable stores the corresponding hour of time
  var time = $(this).data("hour");

  console.log(userInput);
  console.log(time);
});
