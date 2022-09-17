$(document).ready(function () {
  $(".ton").on("click", function (e) {
    e.preventDefault();
    console.log("it works");
    let visits = [];
    let covidCases = [];

    const visitsRequest = $.ajax({
      url: "includes/randomCases.inc.php",
      type: "GET",
      success: function (data) {
        console.log("visits Data", JSON.parse(data));
        visits = JSON.parse(data);

        for (let i = 0; i < 20; i++) {
          const randomVisit = visits[Math.floor(Math.random() * visits.length)];
          console.log({ randomVisit });

          covidCases.push({
            user_id: randomVisit.userId,
            covid_date: randomVisit.visitDate,
          });
        }

        console.log({ covidCases });
        $.ajax({
          type: "POST",
          url: "includes/randomCases.inc.php",
          data: { casesArray: covidCases },
          success: function (data) {
            console.log("done", { data });
          },
        });
      },
    });
  });
});
