$("#submit button").click(function(event) {
  event.preventDefault();

  if ($("#form-name-block input").val() === "") {
    console.log("Name is empty");

    $("#form-name-block input").addClass("error");
    $("#form-name-block label").addClass("error");
  }

  console.log($("#form-name-block input").val());
});
