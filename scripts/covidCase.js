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
  var dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
  // +
  // "" +
  // miliseconds;
  return dateTime;
};

const checkForFutureDate = (date) => {
  const current_date = new Date();
  if (date > current_date) {
    console.log(current_date, date > current_date);
    return true;
  } else {
    return false;
  }
};

const isDifGreaterThan14 = (declarationDate, previousDate) => {
  const convertedDbDate = new Date(previousDate);
  //14 days have passed?
  const diffInMs = declarationDate - convertedDbDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  console.log("diff", diffInDays);
  if (diffInDays <= 14 || diffInDays <= 0 || diffInDays === NaN) {
    return false;
  } else {
    return true;
  }
};

$(document).ready(function () {
  $(".btn").on("click", function (e) {
    e.preventDefault();

    const declarationDate =
      document.getElementById("covidDate").value.replace("T", " ") + ":00";
    console.log(declarationDate);
    $.ajax({
      url: "includes/date.inc.php",
      method: "GET",
      success: function (dBdata) {
        const dataObj = JSON.parse(dBdata);
        console.log(dataObj);

        const convertedDeclarationDate = new Date(declarationDate);
        console.log({ convertedDeclarationDate });
        const isFutureDate = checkForFutureDate(convertedDeclarationDate);

        if (dataObj.length) {
          const hasRecentCase = dataObj.some(
            (item) =>
              isDifGreaterThan14(convertedDeclarationDate, item.covid_date) ===
              false
          );
          console.log({ hasRecentCase }, typeof declarationDate);
          if (isFutureDate) {
            alert("You cannot enter a future date!");
          } else if (hasRecentCase) {
            alert(
              "It has not been 14 days since your last declaration or date is too old!"
            );
          } else if (
            confirm("Are you sure you want to declare your covid Case?")
          ) {
            const post = $.ajax({
              url: "includes/covidCaseDeclaration.inc.php",
              method: "POST",
              data: { date: declarationDate.replace("T", " ") },
              success: function (response) {
                console.log(response);
                alert("Your case was successfully registered!");
              },
            });
          }
        }
      },
    });
  });
});
