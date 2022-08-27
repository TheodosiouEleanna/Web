const checkForSignUp = (username, email, password, cpassword) => {
  if (!username || !password || !email || !cpassword) {
    $(".errors").html("<p>" + "Fill in all the fields" + "</p>");
  } else {
    $.ajax({
      type: "POST",
      url: "includes/signup.inc.php",
      data: {
        username: username,
        email: email,
        password: password,
        cpassword: cpassword,
      },
      success: (response) => {
        let errors = JSON.parse(response);
        $(".errors").css("display", "block");
        if (errors["status"] == 1) {
          $(".errors").html("<p>" + errors.message + "</p>");
        } else {
          window.location.href = "login.php";
        }
      },
    });
  }
};

$(document).ready(() => {
  $("#myForm").on("submit", function (e) {
    e.preventDefault();
    let username = $("input[name = username]").val();
    let email = $("input[name = email]").val();
    let password = $("input[name = password]").val();
    let cpassword = $("input[name = cpassword]").val();
    checkForSignUp(username, email, password, cpassword);
  });
});
