$(document).ready(function () {
  let visits = [];
  let covidCases = [];
  console.log("theLastScript");

  const visitsRequest = $.ajax({
    url: "includes/theLastInc.php",
    type: "GET",
    success: function (data) {
      console.log("visits Data", JSON.parse(data));
      visits = JSON.parse(data);
    },
  });

  visitsRequest.done(() => {
    const visitNamesTable = document.getElementById("data-table2");
    visits.forEach((object) => {
      console.log(object.poiName);
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.poiName + "</td>";
      visitNamesTable.appendChild(tr);
    });

    const visitDatesTable = document.getElementById("data-table3");
    visits.forEach((object) => {
      console.log(object.poiName);
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.visitDate + "</td>";
      visitDatesTable.appendChild(tr);
    });
  });
});
