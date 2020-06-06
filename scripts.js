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

  // Got regular expression from Stack Overflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = $("#form-email-block input").val();

  if ($("#form-email-block input").val() === "") {
    $("#form-email-block input").addClass("input-error");
    $("#form-email-block label").addClass("label-error");

    $("#form-email-block span").remove();

    $("#form-email-block").append("<span id='error-message'>Email is required</span>");
  } else if (re.test(email) === false) {
    $("#form-email-block input").addClass("input-error");
    $("#form-email-block label").addClass("label-error");

    $("#form-email-block span").remove();
    $("#form-email-block").append("<span id='email-error-message'>Email must have an @ sign</span>");
  }

  if (email !== "" && re.test(email) === true) {
    $("#form-email-block input").removeClass("input-error");
    $("#form-email-block label").removeClass("label-error");

    $("#form-email-block span").remove();
  }

});
