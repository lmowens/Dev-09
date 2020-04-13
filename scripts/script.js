$(function () {
  console.log("ready!");

  $("#sender").on("click", function (e) {
    e.preventDefault();
    var getInput = $("#textInput").val();
    $("#textOutput").append("<p>" + getInput + "</p>");
  });
});