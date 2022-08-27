// L= leaflet library class object
//get the date for the current user
var current_date = new Date();
console.log(current_date);

//get day
var current_day = current_date.toLocaleString("en-us", {
  weekday: "long",
});
console.log(current_day);

//create layerGroup
var markers = new L.layerGroup();
// set view to our chosen geographical coordinates and a zoom level
//initialize the map
let map = L.map("map");
let tileURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
//required attribution for copyright notice.
let attribution = {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18,
};
map.addLayer(new L.TileLayer(tileURL, { attribution }));

//Geolocation
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
    let singleMarker = L.marker([lat, lng], { icon: blue }).addTo(map);
    map.setView([lat, lng], 14); //setView(latitude, longitude, zoom level),setView call also returns the map object
    //{s}: style, {z}: zoom level, {x}:latitude, {y}:longitude
    singleMarker.bindPopup(
      "<b>Your are here! </b> <br>" +
        lat.toString() +
        "," +
        lng.toString() +
        "<br>"
    );
    // singleMarker.bindPopup(popupContent);
    markers.addLayer(singleMarker);
    singleMarker.openPopup();
  });
} else {
  console.log("geolocation api not available in this browser.");
}

let Search = new L.Control.Search({
  url: "includes/dataSearch.php?q={s}",
  sourceData: searchByAjax,
  position: "topright",
  propertyName: "name",
  delayType: 500,
  initial: false,
  collapsed: false,
  textPlaceholder: "Search...",
  autoType: false,
  autoCollapse: false,
  marker: false,
  moveToLocation: function (latLng, title, map, marker) {
    map.setView([latLng.lat, latLng.lng], 19);
  },
});

map.addControl(Search);
map.addLayer(markers);

Search.on("search:collapsed", () => {
  markers.clearLayers();
  markers.addLayer(singleMarker);
});

Search.on("search:locationfound", function (event) {
  console.log("found");

  event.layer.openPopup().openOn(map);
});
//filterData options for control search
function searchByAjax(text, callResponse) {
  //callback for 3rd party ajax requests

  console.log(text);
  const result = $.ajax({
    url: "includes/dataSearch.php",
    type: "POST",
    data: { q: text },
    dataType: "json",
    success: function (data) {
      callResponse(data);
      console.log(data);
    },
  });

  result.done(getHours);
  console.log(result);

  function getHours(response) {
    // console.log(response[1].name);
    let name = [];
    let address = [];
    let lat = [];
    let lng = [];
    let ids = [];

    for (let i = 0; i < response.length; i++) {
      name.push(response[i].name);
      address.push(response[i].address);
      lat.push(response[i].loc.lat);
      lng.push(response[i].loc.lng);
      ids.push(response[i].id);
    }

    const h = $.ajax({
      url: "includes/popEst.inc.php",
      type: "POST",
      data: { q: current_day, ids: ids },
      dataType: "json",
      success: function (hours) {
        console.log(hours);
        if (response.length == hours.length) {
          console.log("hello");
          console.log(name);
          console.log(lat);
          console.log(lng);
          for (let i = 0; i < hours.length; i++) {
            let Hours = [];

            Hours = Object.values(hours[i]);

            console.log(Hours);

            let pop = [];
            pop.push(
              Hours[current_date.getHours() + 1],
              Hours[current_date.getHours() + 2],
              Hours[current_date.getHours() + 3]
            );

            let estimate = calcPop(pop);

            if (estimate >= 0 && estimate <= 32) {
              var marker = L.marker(L.latLng(lat[i], lng[i]), { icon: green });
            } else if (estimate >= 33 && estimate <= 65) {
              var marker = L.marker(L.latLng(lat[i], lng[i]), { icon: orange });
            } else if (estimate >= 66) {
              var marker = L.marker(L.latLng(lat[i], lng[i]), { icon: red });
            } else {
              var marker = L.marker(L.latLng(lat[i], lng[i]), { icon: blue });
            }
            console.log(marker);
            marker.bindPopup(
              name[i] +
                "<br>   Address : " +
                address[i] +
                "<br> Average visitors in the next two hours : " +
                calcPop(pop)
            );
            marker.on("mouseover", (e) => {
              e.target.openPopup();
            });
            markers.addLayer(marker);
          }
        }
      },
    });
  }
  return result;
}

function calcPop(pop) {
  est = Math.round(pop.reduce((a, b) => a + b) / pop.length);
  return est;
}

const green = L.icon({
  iconUrl: "img/green.png",
  iconSize: [20, 30], // size of the icon
});

const orange = L.icon({
  iconUrl: "img/orange.png",
  iconSize: [20, 30],
});

const red = L.icon({
  iconUrl: "img/red.png",
  iconSize: [20, 30],
});

const blue = L.icon({
  iconUrl: "img/blue.png",
  iconSize: [20, 30],
});
