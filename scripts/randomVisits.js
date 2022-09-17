const convertDateTime = (date) => {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();
  var miliseconds = date.getMilliseconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  var dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
  return dateTime;
};
const deg2rad = (deg) => (deg * Math.PI) / 180.0;

const getDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const nameList = [
  "John",
  "Jimmy",
  "Jack",
  "Jamie",
  "Lisa",
  "Emily",
  "Amelie",
  "Scott",
  "Eliot",
  "Naomi",
];
const timeStep = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const randomTime = Math.floor(
  Math.random() + timeStep[Math.floor(Math.random() * timeStep.length)]
);
console.log({ randomTime });
let usersArray = [];
let userIds = [];
let pois = [];
let randomDates = [];
let randomVisits = [];

const randomDateTime = (startDate, endDate) => {
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

console.log("hello");

$(document).ready(function () {
  $(".but").on("click", function (e) {
    e.preventDefault();

    usersArray = nameList.map((user, i) => {
      return {
        username: nameList[i],
        password: "123123123!Q",
        email: nameList[i] + "@" + "gmail.com",
        role: 0,
      };
    });
    console.log(usersArray);

    // const post = $.ajax({
    //   type: "POST",
    //   url: "includes/randomUsers.inc.php",
    //   data: { usersArray: usersArray },
    //   success: function (data) {
    //     console.log({ data }, "done");
    //   },
    // });

    const userIdsRequest = $.ajax({
      url: "includes/userIds.inc.php",
      type: "GET",
      success: function (data) {
        console.log("userIds", JSON.parse(data));
        userIds = JSON.parse(data);
      },
    });

    const poisRequest = $.ajax({
      url: "includes/dataSearch.php",
      type: "GET",
      success: function (data) {
        console.log("pois", JSON.parse(data));
        pois = JSON.parse(data);
      },
    });
    poisRequest.done(() => {
      userIds.forEach((id) => {
        const arrayOfDates = usersArray.map((user) => {
          return convertDateTime(
            randomDateTime(new Date(2022, 06, 1), new Date())
          );
        });

        console.log({ arrayOfDates });

        const firstPoi = pois[Math.floor(Math.random() * pois.length)];
        console.log(firstPoi);

        const poisInRange = usersArray.map((user, i) => {
          const poiInRange = pois.find(
            (item) =>
              getDistance(
                firstPoi.loc.lat,
                firstPoi.loc.lng,
                item.loc.lat,
                item.loc.lng
              ) <= 0.2
          );
          return poiInRange;
        });
        const newSet = [...new Set(poisInRange), firstPoi];
        console.log({ newSet });

        const poiInRange = pois.find(
          (item) =>
            getDistance(
              firstPoi.loc.lat,
              firstPoi.loc.lng,
              item.loc.lat,
              item.loc.lng
            ) <= 0.2
        );

        randomVisits = newSet.map((item, index) => {
          console.log({ poiInRange });
          return {
            poi_id: item.id,
            user_id: id.id,
            poi_name: item.name,
            lat: item.loc.lat,
            lng: item.loc.lng,
            visit_date: arrayOfDates[index],
            estimate: Math.floor(Math.random() * 50) + 1,
          };
        });
        console.log({ randomVisits });

        $.ajax({
          type: "POST",
          url: "includes/randomVisits.inc.php",
          data: { visitsArray: randomVisits },
          success: function (data) {
            console.log({ data }, "done");
          },
        });
      });
    });
  });
});
