$(document).ready(function () {
  let visits = [];
  let covidCases = [];
  console.log("theLastScript");

  $.ajax({
    url: "includes/theLastInc.php",
    type: "GET",
    success: function (data) {
      // console.log("visits Data", JSON.parse(data));
      console.log({ data });
      // visits = JSON.parse(data);
    },
  });
});
