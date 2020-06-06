$("#submit button").click(function(event) {
  event.preventDefault();

  if ($("#form-name-block input").val() === "") {
    console.log("Name is empty");

    $("#form-name-block input").addClass("input-error");
    $("#form-name-block label").addClass("label-error");

    $("#form-name-block span").remove();

    $("#form-name-block").append("<span id='error-message'>Name is required</span>");
  }

if ($("#form-name-block input").val() !== "") {
  $("#form-name-block input").removeClass("input-error");
  $("#form-name-block label").removeClass("label-error");

  $("#form-name-block span").remove();
}

  console.log($("#form-name-block input").val());

  if ($("#form-email-block input").val() === "") {
    $("#form-email-block input").addClass("input-error");
    $("#form-email-block label").addClass("label-error");

    $("#form-email-block span").remove();

    $("#form-email-block").append("<span id='error-message'>Email is required</span>");
  }

  if ($("#form-email-block input").val() !== "") {
    $("#form-email-block input").removeClass("input-error");
    $("#form-email-block label").removeClass("label-error");

    $("#form-email-block span").remove();
  }
});
