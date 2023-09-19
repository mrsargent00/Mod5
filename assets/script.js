$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    // Get the user input from the text area within the time block
    var userInput = $(this).siblings(".description").val();

    var timeBlockId = $(this).parent().attr("id");

    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get the user input from localStorage and display it in the respective time block
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var userInput = localStorage.getItem(id);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });

  // Display the current date in the header of the page using Day.js
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});