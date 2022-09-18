const isDifGreaterThan = (declarationDate, previousDate, diffCondition) => {
  //7 days have passed?
  console.log({ declarationDate, previousDate });
  const diffInMs = declarationDate - previousDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  console.log("diff", diffInDays);
  if (diffInDays <= diffCondition || diffInDays <= 0 || diffInDays === NaN) {
    return false;
  } else {
    return true;
  }
};

const isDifGreaterThan = (declarationDate, previousDate, diffCondition) => {
  //7 days have passed?
  console.log({ declarationDate, previousDate });
  const diffInMs = declarationDate - previousDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  console.log("diff", diffInDays);
  if (diffInDays <= diffCondition || diffInDays <= 0 || diffInDays === NaN) {
    return false;
  } else {
    return true;
  }
};

$(document).ready(function () {
  let visits = [];
  let visitsWithCovidCases = [];
  let userCases = [];
  console.log("theLastScript");

  const userCasesRequest = $.ajax({
    url: "includes/userCases.inc.php",
    type: "GET",
    success: function (data) {
      console.log("user cases Data", JSON.parse(data));
      userCases = JSON.parse(data);
    },
  });

  userCasesRequest.done(() => {
    const covidDeclarationsTable = document.getElementById("data-table1");
    userCases.forEach((object) => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.covidDate + "</td>";
      covidDeclarationsTable.appendChild(tr);
    });
  });

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
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.poiName + "</td>";
      visitNamesTable.appendChild(tr);
    });

    const visitDatesTable = document.getElementById("data-table3");
    visits.forEach((object) => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.visitDate + "</td>";
      visitDatesTable.appendChild(tr);
    });
  });

  const visitsThatWereCovid = $.ajax({
    url: "includes/crossVisitsCases.inc.php",
    type: "GET",
    success: function (data) {
      console.log("visits with covid Data", JSON.parse(data));
      visitsWithCovidCases = JSON.parse(data);
    },
  });

  visitsThatWereCovid.done(() => {
    const possibleContacts = visitsWithCovidCases.reduce((acc, item) => {
      console.log(new Date(item.visitDate), new Date(item.covidDate));
      const moreThan7Days = isDifGreaterThan(
        new Date(item.visitDate),
        new Date(item.covidDate),
        7
      );
      if (!moreThan7Days) {
        console.log("less than 7 days", { moreThan7Days });
        acc.push(item);
      } else {
        console.log("else more than seven days", { moreThan7Days });
      }
      return acc;
    }, []);
    console.log({ possibleContacts });

    const storesWithCovid = document.getElementById("data-table4");
    possibleContacts.forEach((object) => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.poiName + "</td>";
      storesWithCovid.appendChild(tr);
    });

    const covidDates = document.getElementById("data-table5");
    possibleContacts.forEach((object) => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>" + object.covidDate + "</td>";
      covidDates.appendChild(tr);
    });
  });
});
