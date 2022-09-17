// L= leaflet library class object
//get the date for the current user
var current_date = new Date();
console.log(current_date);

//get day
var current_day = current_date.toLocaleString("en-us", {
  weekday: "long",
});
console.log(current_day);

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var current_date = date+' '+time;

// console.log(current_date);

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
    // console.log(position);
    let singleMarker = L.marker([38.2362409, 21.7303368], { icon: blue }).addTo(
      map
    );
    map.setView([38.2362409, 21.7303368], 14); //setView(latitude, longitude, zoom level),setView call also returns the map object
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
  });
} else {
  console.log("geolocation api not available in this browser.");
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
  moveToLocation: function (latLng, title, map) {
    map.setView([latLng.lat, latLng.lng], 19);
  },
});
map.addControl(Search);
map.addLayer(markers);

Search.on("search:collapsed", () => {
  markers.clearLayers();
  markers.addLayer(singleMarker);
});

// console.log(dateFormat(current_date));

//filterData options for control search
function searchByAjax(text, callResponse) {
  //callback for 3rd party ajax requests

  console.log(text);
  const result = $.ajax({
    url: "includes/dataSearch.php?=q",
    type: "POST",
    data: { q: text },
    dataType: "json",
    success: function (data) {
      callResponse(data);
      console.log(data);
    },
  });

  result.done(onsuccess);
  console.log(result);

  function onsuccess(response) {
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

          for (let i = 0; i < response.length; i++) {
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
            if (
              getDistance(
                38.2362409,
                21.7303368,
                response[i].loc.lat,
                response[i].loc.lng
              ) <= 0.2
            ) {
              var container = $("<div />");
              container.html(`
          <p for="name"> ${response[i].name}</p>
					<p for="address">${response[i].address}</p>
          <p> To register your visit here click <b>submit. </p>
					<label>Enter an estimation of visitors:</label>
					<input id="est" type="number" min="0"/>
					<button class="sumbit" type="submit">Sumbit</button>`);

              marker.bindPopup(container[0]);

              container.on("click", ".sumbit", function (event) {
                let num = $("#est").val();
                console.log("ho");
                handleSubmit(response, i, num, event);
              });
            } else {
              marker.bindPopup(
                name[i] +
                  "<br>   Address : " +
                  address[i] +
                  "<br> Average visitors in the next two hours : " +
                  calcPop(pop)
              );
            }
            markers.addLayer(marker);
          }
        }
      },
    });
  }
}

function handleSubmit(response, i, num, event) {
  event.preventDefault();

  console.log(response[i].id);
  json = {};
  json.poi_id = response[i].id;
  json.poi_name = response[i].name;
  json.visit_date = current_date.toISOString().slice(0, 19).replace("T", " ");
  json.lat = response[i].loc.lat;
  json.lng = response[i].loc.lng;
  json.est = num;
  console.log(json);

  const register = $.ajax({
    url: "includes/visit.inc.php?=json",
    method: "POST",
    data: { json: json },
    success: function (response) {
      console.log(response);
      map.closePopup();
      alert("Your visit was registered succesfully!");
      $("#est").val("");
    },
  });
}

function calcPop(pop) {
  est = Math.round(pop.reduce((a, b) => a + b) / pop.length);
  return est;
}

// function dateFormat(current_date){
//   cuurent_date = current_date.getUTCFullYear() + '-' +
//     ('00' + (current_date.getUTCMonth()+1)).slice(-2) + '-' +
//     ('00' + current_date.getUTCDate()).slice(-2) + ' ' +
//     ('00' + current_date.getUTCHours()).slice(-2) + ':' +
//     ('00' + current_date.getUTCMinutes()).slice(-2) + ':' +
//     ('00' + current_date.getUTCSeconds()).slice(-2);
// }

const deg2rad = (deg) => (deg * Math.PI) / 180.0;

function getDistance(lat1, lon1, lat2, lon2) {
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
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
