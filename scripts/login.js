const checkForLogin = (username, password) => {
  if (!username || !password) {
    $(".errors").html("<p>" + "Fill in all the fields" + "</p>");
  } else {
    $.ajax({
      type: "POST",
      url: "includes/login.inc.php",
      data: { username: username, password: password },
      success: (response) => {
        const { message } = JSON.parse(response);
        if (message === "Wrong credentials!") {
          $(".errors").html("<p>" + message + "</p>");
        } else {
          if (message == "User!") {
            window.location.href = "index.php";
          } else {
            window.location.href = "home.php";
          }
        }
      },
    });
  }
};

$(document).ready(() => {
  $("#myLogin").on("submit", (e) => {
    e.preventDefault();
    let username = $("input[name = usernameOremail]").val();
    let password = $("input[name = password]").val();
    checkForLogin(username, password);
  });
});
