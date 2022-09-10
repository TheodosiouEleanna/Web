var nameList = [
  "John",
  "Jimmy",
  "Jack",
  "Jamie",
  "Lisa",
  "Emily",
  "Amelie",
  "Scott",
];

let usersArray = [];
let userIds = [];
let pois = [];

console.log("hello");
$(document).ready(function () {
  $(".but").on("click", function (e) {
    e.preventDefault();

    // usersArray = nameList.map((user, i) => {
    //   return {
    //     username: nameList[i] + Math.random().toString(36),
    //     password: "123123123!Q",
    //     email: nameList[i] + "@" + "gmail.com",
    //     role: 0,
    //   };
    // });
    // console.log(usersArray);

    // const post = $.ajax({
    //   type: "POST",
    //   url: "includes/randomUsers.inc.php",
    //   data: { usersArray: usersArray },
    //   success: function (data) {
    //     console.log({ data }, "done");
    //   },
    // });
    $.ajax({
      url: "includes/dataSearch.php",
      type: "GET",
      success: function (data) {
        console.log(JSON.parse(data));
        pois = JSON.parse(data);
      },
    });

    $.ajax({
      url: "includes/userIds.inc.php",
      type: "GET",
      success: function (data) {
        console.log(JSON.parse(data));
        userIds = JSON.parse(data);
      },
    });
  });
});
