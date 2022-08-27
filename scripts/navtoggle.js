// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// const userMenu = [
//   "<li><a  href='visitation.php'>visits</a></li>",
//   "<li><a  href='covidCase.php'>covid case</a></li>",
//   "<li><a href='profile.php'>Profile</a></li>",
//   "<li><a href='includes/logout.inc.php'>Log Out</a></li>",
// ];

// const adminMenu = [
//   "<li><a href='uploadData.php'>Upload Data</a></li>",
//   "<li><a href='graphs.php'>Graphs</a></li>",
//   "<li><a href='profile.php'>Profile </a></li>",
//   "",
// ];

// const renderMenu = (menu) => {
//   menu = menu.join(" ");
//   document.getElementsByClassName("role").innerHTML = menu;
// };

// let role;
// $.ajax({
//   type: "GET",
//   url: "includes/home.inc.php",
//   success: (response) => {
//     role = JSON.parse(response).role;
//     console.log({ role });
//     if (role === 0) {
//       renderMenu(userMenu);
//     } else {
//       renderMenu(adminMenu);
//     }
//   },
// });

const navToggle = document.querySelector("#icon");
const links = document.querySelector(".nav-links");

const currentLocation = location.href;
const menuItems = document.querySelectorAll("a");
const menuLength = menuItems.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className = "active";
  }
  if (menuItems[i].href !== currentLocation) {
    menuItems[i].className = "";
  }
}

navToggle.addEventListener("click", () => {
  links.classList.toggle("show");
});
