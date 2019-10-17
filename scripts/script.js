//This is the main JavaScript file for the work day planner

//Function generate table rows

function makeWorkPlanner(time) {
  var table = $("<table>");
  var tableBody = $("<tbody>");
  var tableRow = $("<tr>");
  var timeColumn = $("<td>" + time + "</td>");
  var inputColumn = $("<td>");
  var saveColumn = $("<td>");
  var saveButton = $("<button>" + "Save" + "</button>");
  var userInput = $("<textarea>");

  var tableContainer = $(".container");
  tableContainer.append(table);
  table.append(tableBody);
  tableBody.append(tableRow);

  saveColumn.append(saveButton);
  inputColumn.append(userInput);

  tableRow.append(timeColumn);
  tableRow.append(inputColumn);
  tableRow.append(saveColumn);

  console.log(table);
  console.log(tableBody);
  console.log(tableRow);
  console.log(timeColumn);
  console.log(inputColumn);
  console.log(saveColumn);
}

makeWorkPlanner("9.am.");
makeWorkPlanner("10a.m.");
makeWorkPlanner("11a.m.");
makeWorkPlanner("12p.m.");
makeWorkPlanner("13p.m.");
makeWorkPlanner("14p.m.");
makeWorkPlanner("15p.m.");
makeWorkPlanner("16p.m.");
makeWorkPlanner("17p.m.");
makeWorkPlanner("18p.m.");
makeWorkPlanner("19p.m.");
makeWorkPlanner("20p.m.");
makeWorkPlanner("21p.m.");
