// var welcome = document.getElementsByClassName('welcome');
// console.log(welcome);

//    $.ajax({//asynchronous http (ajax) request
//       url: 'includes/home.inc.php',
//       method: 'GET',
//       dataType:"json",
//       success: function(data) {
//          console.log(data);
//       }
//    }).done(function(data){
//       welcome.innerHTML = "<p> Hello there " + data.username + "</p>";
// });

// L= leaflet library class object
//initialize the map and set its view to our chosen geographical coordinates and a zoom level
var current_date = new Date();
console.log(current_date);

var current_day = current_date.toLocaleString("en-us", {
  weekday: "long",
});
console.log(current_day);

let map = L.map("map"); //setView(latitude, longitude, zoom level),setView call also returns the map object
//{s}: style, {z}: zoom level, {x}:latitude, {y}:longitude
//Creating a tile layer by setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer
let tileURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
//required attribution for copyright notice.
let attribution = {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18,
};

let tiles = L.tileLayer(tileURL, { attribution });
//add a tile layer to add to our map
tiles.addTo(map);

//Geolocation
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
    let marker = L.marker([lat, lng]).addTo(map);
    map.setView([lat, lng], 14);
    marker.bindPopup(
      "<b>Your are here! </b> <br>" + lat.toString() + "," + lng.toString()
    );
    singleMarker.openPopup();
  });
} else {
  console.log("geolocation not available");
}
