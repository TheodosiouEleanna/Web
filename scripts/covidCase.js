const getDateTime = () => {
  var now = new Date();
  console.log(now); //Mon Feb 21 2022 20:27:47 GMT+0200 (Χειμερινή ώρα Ανατολικής Ευρώπης)
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  // + " " + hour;
  //  +
  // ":" +
  // minute +
  // ":" +
  // seconds +
  // "" +
  // miliseconds;
  return dateTime;
};

const checkForFutureDate = (date) => {
  const current_date = new Date();
  console.log(current_date);
  if (date > current_date) {
    console.log(current_date, date > current_date);
    return true;
  } else {
    return false;
  }
};

const isDifGreaterThan14 = (declarationDate, previousDate) => {
  //14 days have passed?
  const diffInMs = declarationDate - previousDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  console.log("diff", diffInDays);
  if (diffInDays >= 14 || diffInDays <= 0 || diffInDays === NaN) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function () {
  $(".btn").on("click", function (e) {
    e.preventDefault();

    const declarationDate = document.getElementById("covidDate").value;
    console.log(declarationDate);
    $.ajax({
      url: "includes/date.inc.php",
      method: "GET",
      success: function (dBdata) {
        const obj = JSON.parse(dBdata);
        const convertedDeclarationDate = new Date(declarationDate);
        const convertedDbDate = new Date(obj.covid_date);

        console.log({ obj, convertedDeclarationDate, convertedDbDate });
        let diifGreaterThan14 = false;
        if (obj !== false) {
          const current_date = new Date();
          console.log(current_date);
          const diifGreaterThan14 = isDifGreaterThan14(
            convertedDeclarationDate,
            convertedDbDate || current_date
          );
          console.log({ diifGreaterThan14 }, typeof declarationDate);
        }
        const isFutureDate = checkForFutureDate(convertedDeclarationDate);
        if (isFutureDate) {
          alert("You cannot enter a future date!");
        } else if (diifGreaterThan14) {
          console.log("difference true");

          alert(
            "It has not been 14 days since your last declaration or date is too old!"
          );
        } else if (
          confirm("Are you sure you want to declare your covid Case?")
        ) {
          const post = $.ajax({
            url: "includes/covidCaseDeclaration.inc.php",
            method: "POST",
            data: { date: declarationDate },
            success: function (response) {
              console.log(response);
            },
          });
        }
      },
    });
  });
});
